import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Journey, Questions, Tools } from "@/components/Sections";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Hero />
      <main className="px-4">
        <Tools />
        <Questions />
        <Journey />
      </main>
      <Footer />
    </div>
  );
}
