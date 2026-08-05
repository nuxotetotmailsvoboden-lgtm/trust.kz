import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import VerifiedProfiles from "@/components/VerifiedProfiles";
import TrustBlocks from "@/components/TrustBlocks";
import Subscription from "@/components/Subscription";
import InstagramAds from "@/components/InstagramAds";
import RecentlyViewed from "@/components/RecentlyViewed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <VerifiedProfiles />
      <TrustBlocks />
      <Subscription />
      <InstagramAds />
      <RecentlyViewed />
      <Footer />
    </main>
  );
}
