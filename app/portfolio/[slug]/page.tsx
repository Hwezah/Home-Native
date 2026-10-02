import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getAdjacentProjects, getProject, projects } from "@/content/projects";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxImg, ZoomImg } from "@/components/ui/Img";
import { GetStarted } from "@/components/layout/GetStarted";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.intro, openGraph: { images: [p.hero] } };
}

export default async function ProjectPage({ params }: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);
  const [palette, materials] = project.sections;
  const meta = [
    ["Client", project.client],
    ["Date", project.date],
    ["Location", project.location],
    ["Scope", project.scope],
  ];

  return (
    <article>
      {/* ── Intro ── */}
      <section className="wrap pb-[clamp(70px,8vw,120px)] pt-[clamp(70px,9vw,140px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-[clamp(48px,7vw,110px)]">
          <div data-m-center className="flex flex-col gap-[30px]">
            <Link href="/portfolio" className="flex items-center gap-2.5 text-[14px] uppercase tracking-[.1em] text-muted-2">
              <ArrowLeft size={16} strokeWidth={1.25} />
              {project.category} — Interior Design
            </Link>
            <h1 className="m-0 font-serif text-[clamp(64px,8vw,124px)] leading-none tracking-[-.03em]">{project.title}</h1>
            <p className="m-0 max-w-[520px] text-[19px] leading-[1.7] text-muted-1b">{project.intro}</p>
          </div>
          <dl className="m-0 grid grid-cols-2 gap-x-7 gap-y-9">
            {meta.map(([label, value]) => (
              <div key={label} data-m-center className="flex flex-col gap-2.5 border-t border-line pt-[18px]">
                <dt className="text-[13px] uppercase tracking-[.18em] text-muted-2">{label}</dt>
                <dd className="m-0 text-[19px] uppercase tracking-[.04em]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Hero image ── */}
      <section aria-label="Project photo" className="relative h-[clamp(420px,58vw,880px)] overflow-hidden bg-img-bg">
        <ParallaxImg src={project.hero} alt={`${project.title} interior`} speed={0.3} extra={20} priority />
      </section>

      {/* ── Colour palette ── */}
      <section className="wrap py-[clamp(90px,10vw,160px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(48px,6vw,96px)]">
          <div data-m-center className="flex flex-col">
            <Eyebrow className="w-full">{palette.eyebrow}</Eyebrow>
            <h2 className="t-h2">
              {palette.title} <span className="hl-brand">{palette.highlight}</span>
            </h2>
            <p className="mt-8 text-[18px] leading-[1.8] text-muted-1b">{palette.body}</p>
            <div className="mt-10 grid w-full grid-cols-4 gap-3.5">
              {project.palette.map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-2.5">
                  <div
                    className="aspect-square w-full rounded-full transition-transform duration-500 ease-hn hover:scale-[1.08]"
                    style={{ background: c.hex }}
                    title={c.hex}
                  />
                  <span className="text-[13px] uppercase tracking-[.12em] text-muted-1b">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
          <ZoomImg src={palette.image} alt={`${project.title} — palette detail`} frameClassName="aspect-[16/11] bg-img-bg" sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
      </section>

      {/* ── Materials ── */}
      <section className="wrap pb-[clamp(90px,10vw,160px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(48px,6vw,96px)]">
          <ZoomImg src={materials.image} alt={`${project.title} — materials detail`} frameClassName="aspect-[16/11] bg-img-bg" sizes="(max-width: 960px) 100vw, 50vw" />
          <div data-m-center className="flex flex-col">
            <Eyebrow className="w-full">{materials.eyebrow}</Eyebrow>
            <h2 className="t-h2">
              {materials.title} <span className="hl-brand">{materials.highlight}</span>
            </h2>
            <p className="mt-8 text-[18px] leading-[1.8] text-muted-1b">{materials.body}</p>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section aria-label="Gallery" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-1">
        {project.gallery.map((src, i) => (
          <ZoomImg key={i} src={src} alt={`${project.title} — gallery photo ${i + 1}`} frameClassName="aspect-[3/4]" sizes="(max-width: 920px) 100vw, 33vw" />
        ))}
      </section>

      {/* ── Prev / next ── */}
      <nav aria-label="More projects" className="wrap pt-[clamp(70px,8vw,120px)]">
        <div data-m-row className="flex items-center justify-between gap-6 border-y border-line py-9">
          <Link href={`/portfolio/${prev.slug}`} className="flex items-center gap-[18px]">
            <ArrowLeft size={28} strokeWidth={1.25} />
            <span className="flex flex-col gap-1">
              <span className="text-[13px] uppercase tracking-[.16em] text-muted-2">Previous</span>
              <span className="font-serif text-[clamp(22px,2.4vw,36px)]">{prev.title}</span>
            </span>
          </Link>
          <Link href={`/portfolio/${next.slug}`} className="flex items-center gap-[18px] text-right">
            <span className="flex flex-col gap-1">
              <span className="text-[13px] uppercase tracking-[.16em] text-muted-2">Next</span>
              <span className="font-serif text-[clamp(22px,2.4vw,36px)]">{next.title}</span>
            </span>
            <ArrowRight size={28} strokeWidth={1.25} />
          </Link>
        </div>
      </nav>

      <GetStarted />
    </article>
  );
}
