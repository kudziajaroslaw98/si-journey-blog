"use client";

import { useMemo } from "react";
import { getClient } from "../../sanity/lib/client";
import { LiveQueryProvider } from "@sanity/preview-kit";

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const client = useMemo(() => getClient({ token }), [token]);
  return (
    <LiveQueryProvider
      client={client}
      logger={console}
      cache={{ includeTypes: ["author", "post"] }}
    >
      {children}
    </LiveQueryProvider>
  );
}
