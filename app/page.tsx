import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import VerifiedProfiles from "@/components/VerifiedProfiles";
import TrustBlocks from "@/components/TrustBlocks";
import Subscription from "@/components/Subscription";
import InstagramAds from "@/components/InstagramAds";
import RecentlyViewed from "@/components/RecentlyViewed";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <VerifiedProfiles />
      <TrustBlocks />
      <Subscription />
      <InstagramAds />
      <RecentlyViewed />
    </>
  );
}
