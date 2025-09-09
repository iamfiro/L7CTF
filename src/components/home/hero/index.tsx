import { Typo } from "@/components/ui";
import Spacing from "@/components/ui/spacing";

import s from "./style.module.scss";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.hero_text}>
        <div className={s.hero_text_title}>
          <h2>We hack the</h2>
          <h1>2025 Layer7 CTF</h1>
        </div>
        <Typo.Headline className={s.hero_text_date}>
          2025.11.24 - 선린인터넷고등학교
        </Typo.Headline>
      </div>
      <Spacing size={150} />
      <img src="/images/hero/map.svg" alt="Layer7 CTF" className={s.hero_map} />
      <div className={s.hero_map_overlay} />
    </section>
  );
}
