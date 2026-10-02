import Link from "next/link";
import type { Project } from "@/content/projects";
import { Img } from "@/components/ui/Img";

/** 4:5 card — category + title in white, bottom-left, over a 55% gradient. No numbers. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      data-reveal
      className="zoom-host relative block aspect-[4/5] overflow-hidden bg-img-bg text-white hover:text-white"
    >
      <div className="zoom">
        <Img src={project.cover} alt={`${project.title} — ${project.category} interior`} sizes="(max-width: 760px) 100vw, (max-width: 1160px) 50vw, 33vw" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(to_top,rgba(20,16,12,.62),rgba(20,16,12,0))]" />
      <div className="pointer-events-none absolute inset-x-[clamp(20px,2vw,32px)] bottom-[clamp(20px,2vw,32px)] flex flex-col gap-1.5">
        <span className="text-[13px] uppercase tracking-[.16em]">{project.category}</span>
        <span className="font-serif text-[clamp(28px,2.4vw,38px)] leading-[1.1]">{project.title}</span>
      </div>
    </Link>
  );
}
