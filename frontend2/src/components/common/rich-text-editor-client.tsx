"use client";

import { Bold, Image as ImageIcon, Italic, Link as LinkIcon, List, ListOrdered, Underline } from "lucide-react";
import Quill from "quill";
import { useEffect, useRef } from "react";

import "@/styles/quill.css";

/**
 * Quill with a toolbar of Lucide icons: bold, italic, underline, lists, link
 * and image. The page wraps it in whatever border or surface it needs.
 */
export function RichTextEditor({ placeholder, className }: { placeholder?: string; className?: string }) {
	const toolbarRef = useRef<HTMLDivElement>(null);
	const editorRef = useRef<HTMLDivElement>(null);
	const quillRef = useRef<Quill>(null);

	// Quill takes over the element it is given, so it mounts once the element
	// exists and only once, even when the effect runs twice in development.
	useEffect(() => {
		if (quillRef.current || !editorRef.current) return;

		// The toolbar buttons already hold their icons. Without its own icons
		// for these formats, Quill leaves the button contents alone.
		const icons = Quill.import("ui/icons") as Record<string, unknown>;
		for (const name of ["bold", "italic", "underline", "list", "link", "image"]) delete icons[name];

		quillRef.current = new Quill(editorRef.current, {
			modules: { toolbar: toolbarRef.current },
			placeholder,
			theme: "snow",
		});
	}, [placeholder]);

	return (
		<div className={className}>
			<div ref={toolbarRef}>
				<span className="ql-formats">
					<button type="button" className="ql-bold" aria-label="Bold">
						<Bold />
					</button>
					<button type="button" className="ql-italic" aria-label="Italic">
						<Italic />
					</button>
					<button type="button" className="ql-underline" aria-label="Underline">
						<Underline />
					</button>
				</span>
				<span className="ql-formats">
					<button type="button" className="ql-list" value="ordered" aria-label="Numbered list">
						<ListOrdered />
					</button>
					<button type="button" className="ql-list" value="bullet" aria-label="Bulleted list">
						<List />
					</button>
				</span>
				<span className="ql-formats">
					<button type="button" className="ql-link" aria-label="Link">
						<LinkIcon />
					</button>
					<button type="button" className="ql-image" aria-label="Image">
						<ImageIcon />
					</button>
				</span>
			</div>
			<div ref={editorRef} />
		</div>
	);
}
