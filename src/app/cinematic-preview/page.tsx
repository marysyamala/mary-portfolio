import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function CinematicPreviewPage() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen">
      <CinematicHero
        brandName="MS."
        tagline1="Turn raw data,"
        tagline2="into clear decisions."
        cardHeading="Data, engineered for impact."
        cardDescription={
          <>
            <span className="text-white font-semibold">Mary Syamala</span> builds
            reliable data pipelines, clear dashboards, and AI-driven insight —
            turning complex operational and financial data into decisions teams
            can act on.
          </>
        }
        metricValue={40}
        metricLabel="% Manual Work Cut"
        ctaHeading="Let's build something."
        ctaDescription="Have a data or AI problem worth solving? Let's connect."
      />
    </div>
  );
}
