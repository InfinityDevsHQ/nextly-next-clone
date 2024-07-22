import Hero from "./components/hero";
import Trusted from "./components/trusted";
import Benefits from "./components/benefits";
import Highlight1 from "./components/highlight";
import Highlight2 from "./components/highlight2";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import WatchVideo from "./components/watch-video";
import Cta from "./components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Benefits />
      <Highlight1 />
      <Highlight2 />
      <WatchVideo />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
