import sanityClient from "$lib/utils/sanity";
import type { PageLoad } from "./$types";
import { processProjectEntries } from "$lib/utils/sanity";

export const load: PageLoad = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "workExperience"] | order(startDate desc)'
  );

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project']"
  );

  console.log(rawProjects[0].content);

  const projects = rawProjects.map(processProjectEntries);

  return {
    workExperience,
  };
};
