import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/src/components/ProjectDetailPage';
import {
  ALL_PROFILES,
  getProjectById,
} from '@/src/data/portfolioData';

type ProjectRouteParams = Promise<{
  profileId: string;
  projectId: string;
}>;

export function generateStaticParams() {
  return ALL_PROFILES.flatMap((portfolio) =>
    (portfolio.projectGallery || []).map((project) => ({
      profileId: portfolio.id,
      projectId: project.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: ProjectRouteParams;
}): Promise<Metadata> {
  const { profileId, projectId } = await params;
  const result = getProjectById(profileId, projectId);

  if (!result) {
    return {
      title: 'Project Not Found | Xoraix Technologies',
    };
  }

  const { portfolio, project } = result;
  const title = `${project.projectTitle || project.title} | ${portfolio.personal.name}`;

  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      type: 'article',
      images: project.imageUrl ? [{ url: project.imageUrl }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: ProjectRouteParams;
}) {
  const { profileId, projectId } = await params;
  const result = getProjectById(profileId, projectId);

  if (!result) {
    notFound();
  }

  return <ProjectDetailPage portfolio={result.portfolio} project={result.project} />;
}
