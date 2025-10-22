import ChecklistExplorer from "@/components/ChecklistExplorer";
import FaqAccordion from "@/components/FaqAccordion";
import Hero from "@/components/Hero";
import PersonaPlanner from "@/components/PersonaPlanner";
import PhaseGrid from "@/components/PhaseGrid";
import ResourceShowcase from "@/components/ResourceShowcase";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <WhySection />
      <PhaseGrid />
      <ChecklistExplorer />
      <PersonaPlanner />
      <RoadmapTimeline />
      <ResourceShowcase />
      <FaqAccordion />
    </div>
  );
}
