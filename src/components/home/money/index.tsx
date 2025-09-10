import { Typo } from "@/components/ui";

import s from "./style.module.scss";

export default function Money() {
  return (
    <section className={s.money}>
      <Typo.Headline>총 상금</Typo.Headline>
      <Typo.Headline className={s.money_title}>3,000,000원</Typo.Headline>
    </section>
  );
}
