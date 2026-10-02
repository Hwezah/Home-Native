import type { Metadata } from "next";
import { posts } from "@/content/posts";
import { NewsList } from "@/components/sections/NewsList";
import { GetStarted } from "@/components/layout/GetStarted";

export const metadata: Metadata = {
  title: "News",
  description: "Ideas, materials and stories from the HomeNative studio.",
};

export default function NewsPage() {
  return (
    <>
      <NewsList posts={posts} />
      <GetStarted />
    </>
  );
}
