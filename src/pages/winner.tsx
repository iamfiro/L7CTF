import { Light } from "@/components/home";
import { Footer, Header, Spacing } from "@/components/ui";
import { WinnersList } from "@/components/winners";

export default function Winner() {
  return (
    <>
      <Spacing size={64} />
      <Light />
      <Header />
      <WinnersList />
      <Footer />
    </>
  );
}
