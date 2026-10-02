import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { GetStarted } from "@/components/layout/GetStarted";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A selection of recent homes and workplaces by Home Native — each one shaped around the people who use it.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="wrap-wide py-[clamp(60px,7vw,110px)]">
        <PortfolioGrid projects={projects} />
      </section>
      <GetStarted />
    </>
  );
}
