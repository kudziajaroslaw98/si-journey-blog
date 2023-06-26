'use client'

import { definePreview } from 'next-sanity/preview'
import { dataset, projectId } from '../env.ts'

function onPublicAccessOnly() {
  throw new Error('This function is only available on public access')
}

if (!projectId || !dataset) {
  throw new Error('Project ID and dataset must be defined')
}

const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
})

export default usePreview
