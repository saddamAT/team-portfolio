import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { DEFAULT_PORTFOLIO, getPortfolioById, ALL_PROFILES } from './src/data/portfolioData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
  createdAt: string;
}

const contactSubmissions: ContactSubmission[] = [];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      role: DEFAULT_PORTFOLIO.personal.role,
      candidate: DEFAULT_PORTFOLIO.personal.name,
    });
  });

  // Profile data endpoint
  app.get('/api/profile', (req: Request, res: Response) => {
    const profileId = (req.query.id || req.query.profile || req.query.dev) as string;
    const portfolio = getPortfolioById(profileId);
    const { personal, metrics } = portfolio;
    res.json({
      id: portfolio.id,
      name: personal.name,
      title: personal.role,
      secondaryTitle: personal.secondaryTitle,
      yoe: metrics[0]?.value || '7+',
      location: personal.location,
      email: personal.email,
      phone: personal.phone || null,
      status: personal.status,
      headline: personal.headline,
      highlights: personal.highlights,
      metrics: metrics.map((m) => ({ label: m.label, value: m.value })),
      availableProfiles: ALL_PROFILES.map((p) => ({
        id: p.id,
        name: p.personal.name,
        role: p.personal.role,
      })),
    });
  });

  // Contact Form Submission (Server Action Endpoint)
  app.post('/api/contact', (req: Request, res: Response) => {
    try {
      const { name, email, company, projectType, budget, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Name, email, and message are required fields.',
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address.',
        });
      }

      const submission: ContactSubmission = {
        id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        company: company ? String(company).trim() : undefined,
        projectType: String(projectType || 'Full-Stack / AI Architecture'),
        budget: budget ? String(budget) : undefined,
        message: String(message).trim(),
        createdAt: new Date().toISOString(),
      };

      contactSubmissions.unshift(submission);

      console.log(`[Contact Form Received] from ${submission.name} <${submission.email}>: ${submission.projectType}`);

      return res.status(200).json({
        success: true,
        message: `Thank you for reaching out! Your message has been received. ${DEFAULT_PORTFOLIO.personal.name} will review and respond within 24 hours.`,
        submissionId: submission.id,
        receivedAt: submission.createdAt,
      });
    } catch (err) {
      console.error('Error handling contact submission:', err);
      return res.status(500).json({
        success: false,
        error: 'An unexpected error occurred while processing your message. Please try again or email directly.',
      });
    }
  });

  // Interactive Pipeline Simulator Endpoint (handles both /api/pipeline/run and legacy /api/agent-pipeline/run)
  const handlePipelineRun = (req: Request, res: Response) => {
    try {
      const { invoiceNumber = 'INV-2026-0842', vendor = 'CloudScale Dynamics LLC', amount = 14850.0 } = req.body;

      const steps = [
        {
          step: 1,
          name: 'GCV OCR Ingestion',
          status: 'COMPLETED',
          latencyMs: 142,
          details: `Parsed raw payload for ${vendor}. Extracted invoice #${invoiceNumber}, subtotal $${(amount * 0.9).toFixed(2)}, tax $${(amount * 0.1).toFixed(2)}, total $${amount.toFixed(2)}. Zero manual entry required.`,
        },
        {
          step: 2,
          name: 'Orchestration State Graph Routing',
          status: 'COMPLETED',
          latencyMs: 88,
          details: 'Evaluated deterministic business rules against approval thresholds. Verified PO alignment and payment term compliance.',
        },
        {
          step: 3,
          name: 'Relational Database Verification',
          status: 'COMPLETED',
          latencyMs: 65,
          details: 'Executed parameterized PostgreSQL query to check vendor tax ID and duplicate hash checks. Schema verified without locking.',
        },
        {
          step: 4,
          name: 'WebSocket RPA Desktop Bridge',
          status: 'COMPLETED',
          latencyMs: 110,
          details: 'Dispatched task via authenticated WebSocket to Windows RPA client. Automated accounting software UI navigation completed.',
        },
        {
          step: 5,
          name: 'LLM Eval Guardrails & Precision Check',
          status: 'PASSED',
          latencyMs: 45,
          details: 'Output passed basedpyright static contract validation & regression assertions. ExecutionResult: COMPLETED_AUTONOMOUSLY.',
        },
      ];

      return res.status(200).json({
        success: true,
        executionId: `exec_${Date.now()}`,
        status: 'COMPLETED_AUTONOMOUSLY',
        totalLatencyMs: 450,
        steps,
        summary: `Successfully processed invoice ${invoiceNumber} autonomously without human handoff.`,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Pipeline simulation execution failure.',
      });
    }
  };

  app.post('/api/pipeline/run', handlePipelineRun);
  app.post('/api/agent-pipeline/run', handlePipelineRun);

  // Vite integration
  if (process.env.NODE_ENV === 'production') {
    // In production, serve built client
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // In development, hook into Vite middlewares
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
