import sanityClient from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "workExperience"] | order(startDate desc)'
  );

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project']"
  );

  //   const projects = rawProjects.map(processProjectEntries)

  return {
    workExperience,
  };
};
