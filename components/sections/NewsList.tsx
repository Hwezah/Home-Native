"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { postCategories, type Post } from "@/content/posts";
import { Chip } from "@/components/ui/Chip";
import { Img } from "@/components/ui/Img";

const INDENT = "pl-[clamp(0px,calc((100vw-600px)*.45),400px)]";

export function NewsList({ posts }: { posts: Post[] }) {
  const [category, setCategory] = useState<(typeof postCategories)[number]>("All");
  const shown = category === "All" ? posts : posts.filter((p) => p.category === category);

  return (
    <>
      <section className="wrap pb-[clamp(50px,6vw,90px)] pt-[clamp(70px,9vw,140px)]">
        <div data-m-center className="flex flex-wrap items-end justify-between gap-8">
          <h1 className="m-0 font-serif text-[clamp(72px,9vw,140px)] leading-none tracking-[-.03em]">News</h1>
          <div data-m-center className="flex max-w-[520px] flex-col gap-5">
            <p className="m-0 text-[18px] leading-[1.7] text-muted-1b">Ideas, materials and stories from the studio.</p>
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter posts">
              {postCategories.map((c) => (
                <Chip key={c} active={c === category} onClick={() => setCategory(c)}>
                  {c}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Posts" className="wrap pb-[clamp(60px,6vw,90px)]">
        {shown.map((p) => (
          <article key={p.slug} className="mb-[clamp(80px,9vw,140px)]">
            <div data-m-center className={`mb-8 flex flex-col gap-3.5 ${INDENT}`}>
              <Link href={`/news/${p.slug}`} className="block">
                <h2 className="m-0 max-w-[760px] text-[clamp(36px,4.2vw,66px)] font-extralight leading-[1.08] tracking-[-.01em] text-balance transition-colors duration-300">
                  {p.title}
                </h2>
              </Link>
              <div className="flex gap-[18px] text-[17px]">
                <span className="text-muted-2">{p.date}</span>
                <span className="font-normal">{p.category}</span>
              </div>
            </div>
            <Link href={`/news/${p.slug}`} data-reveal className="zoom-host relative block aspect-[16/7] overflow-hidden bg-[#E9E4DC]" aria-label={p.title}>
              <div className="zoom">
                <Img src={p.image} alt="" sizes="(max-width: 1160px) 100vw, 1080px" />
              </div>
            </Link>
            <div data-m-center className={`mt-8 flex flex-col items-start gap-[22px] ${INDENT}`}>
              <p className="m-0 max-w-[620px] text-[19px] leading-[1.7] text-muted-1b">{p.excerpt}</p>
              <Link
                href={`/news/${p.slug}`}
                className="flex items-center gap-3 border-b border-ink pb-1.5 text-[14px] uppercase tracking-[.14em] transition-[gap,color,border-color] duration-[350ms] hover:gap-5 hover:border-brand-mid"
              >
                Read more
                <ArrowRight size={16} strokeWidth={1.25} />
              </Link>
            </div>
          </article>
        ))}
        {shown.length === 0 && <p className="text-[19px] text-muted-1b">No posts in this category yet.</p>}

        <nav aria-label="Pagination" data-m-row className="flex items-center justify-between gap-5 border-t border-line pt-9 text-[15px] uppercase tracking-[.12em]">
          <div className="flex gap-[26px]">
            <span aria-current="page" className="border-b border-ink pb-1">01</span>
            <span className="text-muted-2" aria-disabled="true">02</span>
            <span className="text-muted-2" aria-disabled="true">03</span>
          </div>
          <span className="flex items-center gap-3 text-muted-2" aria-disabled="true">
            Older posts
            <ArrowRight size={16} strokeWidth={1.25} />
          </span>
        </nav>
      </section>
    </>
  );
}
