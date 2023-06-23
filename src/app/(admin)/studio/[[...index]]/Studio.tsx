"use client";
import config from "../../../../../sanity.config";
import { NextStudio } from "next-sanity/studio";

export function Studio() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />;
}
