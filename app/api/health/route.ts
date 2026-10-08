import { NextResponse } from 'next/server';
import { DEFAULT_PORTFOLIO } from '@/src/data/portfolioData';

export function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    role: DEFAULT_PORTFOLIO.personal.role,
    candidate: DEFAULT_PORTFOLIO.personal.name,
  });
}
