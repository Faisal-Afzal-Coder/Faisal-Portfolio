import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { PageLoader } from "@/components/layout/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { personalInfo, siteConfig } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: "MERN Stack Developer",
  url: siteConfig.url,
  email: personalInfo.email,
  telephone: personalInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gujranwala",
    addressCountry: "Pakistan",
  },
  sameAs: [personalInfo.linkedin, personalInfo.github],
  image: `${siteConfig.url}${personalInfo.profileImage}`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
