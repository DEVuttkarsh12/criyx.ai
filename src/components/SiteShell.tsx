import type { ReactNode } from "react";

import ScrollOrchestrator from "@/components/ScrollOrchestrator";
import SiteNav from "@/components/SiteNav";
import { CAL_LINK } from "@/lib/site-data";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="site-surface relative min-h-screen overflow-x-clip bg-transparent text-[#f4f6fa]">
      <ScrollOrchestrator />
      <SiteNav calLink={CAL_LINK} />
      {children}
    </main>
  );
}
