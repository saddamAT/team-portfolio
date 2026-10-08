import { NextResponse } from 'next/server';
import { ALL_PROFILES, getPortfolioById } from '@/src/data/portfolioData';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const profileId =
    searchParams.get('id') || searchParams.get('profile') || searchParams.get('dev') || undefined;
  const portfolio = getPortfolioById(profileId);
  const { personal, metrics } = portfolio;

  return NextResponse.json({
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
}
