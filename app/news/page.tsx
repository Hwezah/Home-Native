import type { Metadata } from "next";
import { posts } from "@/content/posts";
import { NewsList } from "@/components/sections/NewsList";
import { GetStarted } from "@/components/layout/GetStarted";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "News",
  description: `Ideas, materials and stories from the ${site.name} studio.`,
};

export default function NewsPage() {
  return (
    <>
      <NewsList posts={posts} />
      <GetStarted />
    </>
  );
}
