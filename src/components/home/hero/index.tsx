import { Button, Typo } from "@/components/ui";
import Spacing from "@/components/ui/spacing";
import { HStack, VStack } from "@/components/ui/stack";

import s from "./style.module.scss";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.light} />
      <div className={s.light_center} />
      <div className={s.light_right} />
      <div className={s.hero_text}>
        <VStack gap={12}>
          <h2 className={s.hero_subtitle}>We hack the</h2>
          <h1 className={s.hero_title}>2025 Layer7 CTF</h1>
        </VStack>
        <Typo.BodyLarge className={s.hero_text_date}>
          2025.11.24 - 선린인터넷고등학교
        </Typo.BodyLarge>
        <HStack gap={14} className={s.buttons}>
          <Button size="lg" variant="secondary">
            문의하기
          </Button>
          <Button size="lg">Layer7 CTF 참가 신청하기</Button>
        </HStack>
      </div>
      <Spacing size={150} />
      <img src="/images/hero/map.svg" alt="Layer7 CTF" className={s.hero_map} />
      <div className={s.hero_map_overlay} />
    </section>
  );
}
