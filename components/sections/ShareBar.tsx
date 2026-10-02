"use client";

import { useEffect, useRef, useState } from "react";
import { siteUrl } from "@/content/site";
import { Link as LinkIcon } from "lucide-react";
import { Facebook, Linkedin } from "@/components/ui/social-icons";

export function ShareBar({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const url = siteUrl + path;

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard?.writeText(window.location.origin + path);
    } catch {
      /* clipboard may be blocked; still show feedback */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  const enc = encodeURIComponent;
  return (
    <div className="flex items-center gap-5 text-ink">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <Facebook size={20} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}&title=${enc(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-[13px] font-light uppercase tracking-[.1em] transition-colors"
        style={{ color: copied ? "var(--green)" : "var(--ink)" }}
      >
        <LinkIcon size={20} strokeWidth={1.25} />
        <span aria-live="polite">{copied ? "Copied" : "Copy link"}</span>
      </button>
    </div>
  );
}
