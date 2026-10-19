"use client";

import dynamic from "next/dynamic";

/** Quill reaches for `document` as soon as it loads, so the editor only ever loads in the browser. */
export const RichTextEditor = dynamic(() => import("./rich-text-editor-client").then((module) => module.RichTextEditor), { ssr: false });
