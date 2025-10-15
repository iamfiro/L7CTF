import {
  About,
  Calendar,
  CompetitionAbout,
  Contact,
  FormAbout,
  Gallery,
  Hero,
  Merit,
  Money,
  Sponsor,
} from "@/components/home";
import { Header, Light } from "@/components/ui";
import Footer from "@/components/ui/footer";
import Spacing from "@/components/ui/spacing";

export default function Home() {
  return (
    <>
      <Spacing size={64} />
      <Light />
      <Header />
      <Hero />
      <Sponsor />
      <About />
      <Merit />
      <Calendar />
      <FormAbout />
      <CompetitionAbout />
      <Money />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
