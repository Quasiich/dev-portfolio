import { processProjectEntries } from "$lib/utils/sanity";
import sanityClient from "$lib/utils/sanity";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    `*[_type == "project" && slug == $slug]`,
    { slug }
  );

  if (rawProjects.length !== 1) {
    throw error(404, "Project not found");
  }

  const project = processProjectEntries(rawProjects[0]);
  return {
    project,
  };
};
