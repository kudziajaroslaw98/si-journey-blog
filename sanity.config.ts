/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {unsplashAssetSource, unsplashImageAsset,} from 'sanity-plugin-asset-source-unsplash';
import {markdownSchema} from 'sanity-plugin-markdown/next';

import {deskTool} from 'sanity/desk';
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env.ts';
import schema from './sanity/schema.ts';
import getDefaultDocumentNode from './structure.ts';

export default defineConfig({
  basePath: '/blog/studio',
  title: 'Journey - blog',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    markdownSchema(),
    unsplashImageAsset(),
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  form: {
    image: {
      // eslint-disable-next-line no-shadow
      assetSources: (previousAssetSources, { schema }) => {
        if (schema.name === 'movie-image') {
          // remove unsplash from movie-image types
          return previousAssetSources.filter(
            (assetSource) => assetSource !== unsplashAssetSource
          );
        }
        return previousAssetSources;
      },
    },
  },
});
