import About from "@/components/about";
import Coaching from "@/components/coaching";
import Contact from "@/components/contact";
import Discipleship from "@/components/discipleship";
import Hero from "@/components/hero";
import Numbers from "@/components/numbers";
import Resources from "@/components/resources";
import Teachings from "@/components/teachings";
import Welcome from "@/components/welcome";
import Tour from "@/components/tour";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Discipleship />
      <Teachings />
      <Numbers />
      <About />
      <Tour />
      <Resources />
      <Coaching />
      <Contact />
    </>
  );
}
