import AdvancedFeatures from "./AdvanceFeatures";
import Blog from "./Blog";
import FAQ from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import FreeTrial from "./FreeTrail";
import Header from "./Header";
import { HomeHeader } from "./HomeHeader";
import { SocialProof } from "./SocialProof";
import Testimonial from "./Testimonial";

export const CompleteHome = () => {
  return (
    <>
      <Header />
      <HomeHeader />
      <SocialProof />
      <Features />
      <Testimonial />
      <AdvancedFeatures />
      <FAQ />
      <Blog />
      <FreeTrial />
      <Footer />
    </>
  );
};
