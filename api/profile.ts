import type { Request, Response } from 'express';
import { getPortfolioById, ALL_PROFILES } from '../src/data/portfolioData';

export default function handler(req: Request, res: Response) {
  const profileId = (req.query.id || req.query.profile || req.query.dev) as string;
  const portfolio = getPortfolioById(profileId);
  const { personal, metrics } = portfolio;

  res.status(200).json({
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
    availableProfiles: ALL_PROFILES.map((p) => ({
      id: p.id,
      name: p.personal.name,
      role: p.personal.role,
    })),
  });
}
