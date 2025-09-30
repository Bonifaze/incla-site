import dynamic from 'next/dynamic';
import Hero from "@/layouts/Hero";

// Lazy load components that are below the fold
const FeaturesList = dynamic(() => import("@/components/home/FeaturesList"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
});

const HomeAbout = dynamic(() => import("@/components/home/HomeAbout"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const HomeContact = dynamic(() => import("@/components/home/HomeContact"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
});

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