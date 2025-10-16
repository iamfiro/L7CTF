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
      <Merit
        text="문제 개쩐다는 그런 타이틀을 적어주세요"
        description="설명을 적으시오"
        image="/images/merit/merit_quiz.png"
      />
      <Merit
        text="문제 개쩐다는 그런 타이틀을 적어주세요"
        description="설명을 적으시오"
        image="/images/merit/merit_quiz.png"
        reversed
      />
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
