'use client'

import React, {useMemo} from 'react'
import {LiveQueryProvider} from '@sanity/preview-kit'
import {getClient} from '@/sanity/lib/client.ts'

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) {
  const client = useMemo(() => getClient({ token }), [token])
  return (
    <LiveQueryProvider
      client={client}
      logger={console}
      cache={{ includeTypes: ['author', 'post'] }}
    >
      {children}
    </LiveQueryProvider>
  )
}
