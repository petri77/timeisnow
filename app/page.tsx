import Hero from "./components/Hero";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Newest />
    </main>
  );
}
