import { Suspense } from "react";
import { NavigationWrapper } from "@/components/navigation-wrapper";
import { Loading } from "@/components/loading";
import dynamic from "next/dynamic";
import { ClientWrapper } from "@/components/client-wrapper";

// Dynamically import components with loading states
const Hero = dynamic(
  () => import("@/components/sections/hero").then((mod) => mod.Hero),
  {
    loading: () => <Loading />,
  }
);

const About = dynamic(() =>
  import("@/components/sections/about").then((mod) => mod.About)
);
const Experience = dynamic(() =>
  import("@/components/sections/experience").then((mod) => mod.Experience)
);
const Projects = dynamic(() =>
  import("@/components/sections/projects").then((mod) => mod.Projects)
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.Contact)
);

export default function Home() {
  return (
    <ClientWrapper>
      <div className="relative">
        <NavigationWrapper />
        <main className="space-y-32 mb-32">
          <Suspense fallback={<Loading />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </ClientWrapper>
  );
}
