import AutomationCoreHero from "@/components/AutomationCoreHero";
import SiteShell from "@/components/SiteShell";
import { CAL_LINK } from "@/lib/site-data";

export default function Home() {
  return (
    <SiteShell>
      <AutomationCoreHero calLink={CAL_LINK} />
    </SiteShell>
  );
}
