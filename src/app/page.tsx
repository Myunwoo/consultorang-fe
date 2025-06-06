import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Process from "@/components/home/Process";
import Why from "@/components/home/Why";
import CallToAction from "@/components/home/CallToAction";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Feature />
      <Process />
      <Why />
      <CallToAction />
      <FAQ />
    </div>
  );
}
