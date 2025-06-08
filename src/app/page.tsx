import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import FAQ from "@/components/home/FAQ";
import Creator from "@/components/home/Creator";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Feature />
      <FAQ />
      <Creator />
    </div>
  );
}
