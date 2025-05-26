import FeaturesList from "@/components/home/FeaturesList";
import Hero from "@/layouts/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import LatestUpdates from "@/components/home/LatestUpdates";
import Testimonials from "@/components/home/Testimonials";
import HomeContact from "@/components/home/HomeContact";

export default async function Home() {

  return (
    <>
      <Hero />
      <FeaturesList />
      <HomeAbout />
      <HomeContact />
    </>
  );
}