import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "e1tziv5b",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-03-20",
};

const sanityClient = createClient(config);
export default sanityClient;
