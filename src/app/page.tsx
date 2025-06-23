import About from "./component/about";
import CertificateSection from "./component/certificate";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import ProjectSection from "./component/project";
import ClientReviewsSection from "./component/review";
import MyServicesWithPricingSection from "./component/service";
import Skills from "./component/skills";
import TrustedBySection from "./component/trustbadges";
import VideoSlider from "./component/slider";
import Footer from "./component/footer";
import Contact from "./component/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectSection />
      <Skills />
      <MyServicesWithPricingSection />
      <ClientReviewsSection />
      <TrustedBySection />
      <CertificateSection />
      <Contact/>
      <VideoSlider/>
      <Footer />
    </>
  );
}
