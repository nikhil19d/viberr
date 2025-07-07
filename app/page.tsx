import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Join } from "@/components/Join";
import { Metric } from "@/components/Metric";
import { Mission } from "@/components/Mission";
import { Review } from "@/components/Review";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <Metric />
      <Features />
      <Work />
      <Review />
      <Mission />
      <Join />
      <Footer />
    </div>
  );
}
