import { Calendar, Hero, Sponsor } from "@/components/home";
import { Header } from "@/components/ui";
import Footer from "@/components/ui/footer";
import Spacing from "@/components/ui/spacing";

export default function Home() {
  return (
    <>
      <Spacing size={64} />
      <Header />
      <Hero />
      <Sponsor />
      <Calendar />
      <Footer />
      <span>asd</span>
    </>
  );
}
