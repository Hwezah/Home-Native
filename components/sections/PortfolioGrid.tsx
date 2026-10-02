"use client";

import { useState } from "react";
import { projectCategories, type Project } from "@/content/projects";
import { Chip } from "@/components/ui/Chip";
import { ProjectCard } from "./ProjectCard";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const shown = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] items-start gap-x-[clamp(24px,3.2vw,60px)] gap-y-[clamp(56px,6vw,96px)]">
      {/* The first cell is the intro. */}
      <div data-m-center className="flex min-h-[clamp(320px,34vw,560px)] flex-col justify-center gap-7 self-stretch">
        <h1 className="m-0 font-serif text-[clamp(68px,7vw,116px)] leading-none tracking-[-.03em]">Portfolio</h1>
        <p className="m-0 max-w-[420px] text-[19px] leading-[1.7] text-muted-1b">
          A selection of recent homes and workplaces — each one shaped around the people who use it.
        </p>
        <div className="flex flex-wrap gap-2.5 mp:justify-center" role="group" aria-label="Filter projects">
          {projectCategories.map((c) => (
            <Chip key={c} active={c === category} onClick={() => setCategory(c)}>
              {c}
            </Chip>
          ))}
        </div>
      </div>
      {shown.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
