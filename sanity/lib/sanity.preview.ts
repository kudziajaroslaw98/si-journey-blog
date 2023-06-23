"use client"

import { dataset, projectId } from "../env";
import {definePreview} from 'next-sanity/preview';

function onPublicAccessOnly(){
    throw new Error("This function is only available on public access");
}

if(!projectId || !dataset){
    throw new Error("Project ID and dataset must be defined");
}

export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})