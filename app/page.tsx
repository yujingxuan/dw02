import Banner from "@/components/Home/Banner";
import RelatedProducts from "@/components/Home/RelatedProducts";
import TrustBar from "@/components/Home/TrustBar";
import AppleCardsCarousel from "@/components/Home/AppleCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <TrustBar />
      <RelatedProducts />
      <AppleCardsCarousel />
    </main>
  );
}
