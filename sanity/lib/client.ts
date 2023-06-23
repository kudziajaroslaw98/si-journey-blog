import { apiVersion, dataset, projectId } from "../env";

import { createClient, type SanityClient } from "next-sanity";
import { cache } from "react";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId: projectId,
    dataset: dataset,
    // eslint-disable-next-line no-warning-comments
    // @TODO perspectives require vX for now
    apiVersion: apiVersion,
    useCdn: true,
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "published",
    studioUrl: "/studio",
    logger: console,
  });
  if (preview) {
    if (preview.token) {
      return client.withConfig({
        token: preview.token,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: "previewDrafts",
      });
    }
  }
  return client;
}
const client = getClient();
export const clientFetch = cache(client.fetch.bind(client));
