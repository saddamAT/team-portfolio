import App from '@/src/App';
import { ALL_PROFILES, getPortfolioById } from '@/src/data/portfolioData';

type PortfolioPageProps = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ profile?: string; dev?: string; id?: string }>;
};

function resolveInitialProfileId(value: string | undefined): string | undefined {
  if (!value) return undefined;

  const cleaned = value.toLowerCase();
  const isKnownProfile = ALL_PROFILES.some((profile) => {
    const compactId = profile.id.replace(/[-_\s]/g, '');
    const compactName = profile.personal.name.toLowerCase().replace(/[-_\s]/g, '');
    const compactValue = cleaned.replace(/[-_\s]/g, '');

    return (
      compactId.includes(compactValue) ||
      compactValue.includes(compactId) ||
      compactName.includes(compactValue) ||
      compactValue.includes(compactName.split(' ')[0])
    );
  });

  if (!isKnownProfile) return undefined;
  return getPortfolioById(value).id;
}

export default async function PortfolioPage({
  params,
  searchParams,
}: PortfolioPageProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const queryProfile = query.profile || query.dev || query.id;
  const pathProfile = slug?.join('/');
  const initialProfileId =
    resolveInitialProfileId(queryProfile) || resolveInitialProfileId(pathProfile);

  return <App initialProfileId={initialProfileId} />;
}
