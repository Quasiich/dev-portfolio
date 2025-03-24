import { createClient, type ClientConfig } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "e1tziv5b",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-03-20",
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
  const builder = ImageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawProject.image).url();
  const processedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    date: rawProject.date,
    stack: rawProject.techStack,
    projectImageUrl,
    slug: rawProject.slug,
    // content: Array<ProcessedTextContent | ProcessedImageContent>;
  };

  return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
  if (content._type === "block") {
    // process text content
    const processedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      textToRender: content.children.map((elem) => elem.text).join("\n"),
    };
  } else {
  }
}
