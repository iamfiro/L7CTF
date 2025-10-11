import { Light } from "@/components/home";
import { Footer, Header, Spacing } from "@/components/ui";
import { MakersList } from "@/components/makers";

export default function Maker() {
  return (
    <>
      <Spacing size={64} />
      <Light />
      <Header />
      <MakersList />
      <Footer />
    </>
  );
}
