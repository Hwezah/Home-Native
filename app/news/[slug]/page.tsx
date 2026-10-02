import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { getAdjacentPosts, getPost, posts, type Block } from "@/content/posts";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Img, ParallaxImg, ZoomImg } from "@/components/ui/Img";
import { ShareBar } from "@/components/sections/ShareBar";
import { GetStarted } from "@/components/layout/GetStarted";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt, openGraph: { type: "article", images: [p.image] } };
}

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "lead":
      return <p data-m-center className="m-0 font-serif text-[clamp(26px,2.4vw,36px)] leading-[1.4] text-ink">{b.text}</p>;
    case "p":
      return <p data-m-center className="m-0 text-[19px] leading-[1.8] text-muted-1">{b.text}</p>;
    case "h3":
      return <h3 data-m-center className="mb-0 mt-6 text-[clamp(24px,2vw,30px)] font-normal leading-[1.3]">{b.text}</h3>;
    case "image":
      return <ZoomImg src={b.src} alt={b.alt} frameClassName="my-[22px] aspect-[16/10] bg-[#D8CFBF]" sizes="(max-width: 860px) 100vw, 780px" />;
    case "list":
      // Lists are always left-aligned, mobile included.
      return (
        <ul className="m-0 flex list-disc flex-col gap-3 pl-[22px] text-left text-[19px] leading-[1.7] text-muted-1">
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="my-[22px] flex flex-col items-center gap-[22px] border-y border-line py-12 text-center">
          <span className="text-brand-mid">
            <Quote size={40} strokeWidth={1.25} />
          </span>
          <blockquote className="m-0">
            <p className="m-0 font-serif text-[clamp(28px,3vw,44px)] italic leading-[1.3] text-ink text-balance">{b.text}</p>
          </blockquote>
          <figcaption className="text-[14px] uppercase tracking-[.16em] text-muted-2">{b.by}</figcaption>
        </figure>
      );
  }
}

export default async function PostPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { prev, next } = getAdjacentPosts(slug);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="wrap pb-[clamp(40px,4vw,60px)] pt-[clamp(70px,9vw,140px)]">
          <div data-m-center className="flex flex-col gap-6">
            <Link href="/news" className="flex items-center gap-2.5 text-[14px] uppercase tracking-[.1em] text-muted-2">
              <ArrowLeft size={16} strokeWidth={1.25} />
              All news
            </Link>
            <h1 className="m-0 max-w-[1050px] font-serif text-[clamp(52px,7vw,112px)] leading-[1.02] tracking-[-.03em] text-balance">{post.title}</h1>
            <div className="flex flex-wrap gap-[18px] text-[17px]">
              <time className="text-muted-2">{post.date}</time>
              <span className="font-normal">{post.category}</span>
              <span className="text-muted-2">· {post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="wrap">
          <div className="relative h-[clamp(340px,52vw,720px)] overflow-hidden bg-[#E9D9C4]">
            <ParallaxImg src={post.image} alt={post.title} speed={0.2} extra={12} priority sizes="(max-width: 1160px) 100vw, 1080px" />
          </div>
        </div>

        <section aria-label="Article" className="wrap pt-[clamp(70px,8vw,120px)]">
          <div className="ml-auto mr-[clamp(0px,6vw,80px)] flex max-w-[780px] flex-col gap-[26px] mp:mx-auto">
            {post.body.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}
            <div data-m-stack data-m-center className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-[30px]">
              <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0 mp:justify-center">
                {post.tags.map((t) => (
                  <li key={t} className="whitespace-nowrap rounded-full border border-line-strong px-4 py-2 text-[13px] uppercase tracking-[.1em]">
                    {t}
                  </li>
                ))}
              </ul>
              <ShareBar path={`/news/${post.slug}`} title={post.title} />
            </div>
          </div>
        </section>
      </article>

      <nav aria-label="More posts" className="wrap pt-[clamp(70px,8vw,120px)]">
        <div data-m-row className="flex items-center justify-between gap-6 border-y border-line py-9">
          <Link href={`/news/${prev.slug}`} className="flex max-w-[46%] items-center gap-[18px]">
            <ArrowLeft size={26} strokeWidth={1.25} />
            <span className="flex flex-col gap-1">
              <span className="text-[13px] uppercase tracking-[.16em] text-muted-2">Previous</span>
              <span className="text-[clamp(17px,1.6vw,22px)]">{prev.title}</span>
            </span>
          </Link>
          <Link href={`/news/${next.slug}`} className="flex max-w-[46%] items-center gap-[18px] text-right">
            <span className="flex flex-col gap-1">
              <span className="text-[13px] uppercase tracking-[.16em] text-muted-2">Next</span>
              <span className="text-[clamp(17px,1.6vw,22px)]">{next.title}</span>
            </span>
            <ArrowRight size={26} strokeWidth={1.25} />
          </Link>
        </div>
      </nav>

      <section className="wrap pt-[clamp(80px,9vw,130px)]">
        <div data-m-center className="flex flex-col">
          <Eyebrow className="w-full">Keep reading</Eyebrow>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(24px,3vw,48px)]">
          {related.map((n) => (
            <Link key={n.slug} href={`/news/${n.slug}`} className="zoom-host group flex flex-col gap-[18px] text-ink">
              <div data-reveal className="relative aspect-[4/3] overflow-hidden bg-[#E9E4DC]">
                <div className="zoom">
                  <Img src={n.image} alt="" sizes="(max-width: 960px) 100vw, 33vw" />
                </div>
              </div>
              <div className="flex gap-3.5 text-[15px]">
                <span className="text-muted-2">{n.date}</span>
                <span className="font-normal">{n.category}</span>
              </div>
              <span className="text-[clamp(22px,1.8vw,26px)] leading-[1.3] transition-colors duration-300 group-hover:text-brand-mid">{n.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <GetStarted />
    </>
  );
}
