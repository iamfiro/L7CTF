import { Section, Typo } from "@/components/ui";
import { FlexAlign, VStack } from "@/components/ui/stack";

import s from "./style.module.scss";

export default function About() {
  return (
    <Section>
      <div className={s.container}>
        <VStack gap={16} align={FlexAlign.Center}>
          <Typo.Headline>Layer7 CTF가 무엇인가요?</Typo.Headline>
          <Typo.BodyLarge className={s.about_description}>
            2010년도 대한민국 최초로 고등학생이 주최한 전국 해킹 대회로 시작해
            <br />
            2025년도까지 진행 되고 있습니다
          </Typo.BodyLarge>
        </VStack>
        <div className={s.history_wrap}>
          <div className={s.history}>
            <div className={s.history_name}>
              <img src="/layer7.svg" alt="Layer7" className={s.history_image} />
              <Typo.Body>Layer7 Hacking Festival</Typo.Body>
            </div>
            <Typo.BodyLarge className={s.history_date}>
              2010 ~ 2013
            </Typo.BodyLarge>
            <div className={s.history_dot} />
          </div>
          <div className={s.history}>
            <div className={s.history_name}>
              <img src="/layer7.svg" alt="Layer7" className={s.history_image} />
              <Typo.Body>선린모의해킹방어대회</Typo.Body>
            </div>
            <Typo.BodyLarge className={s.history_date}>
              2010 ~ 2013
            </Typo.BodyLarge>
            <div className={s.history_dot} />
          </div>
          <div className={s.history}>
            <div className={`${s.history_name} ${s.current}`}>
              <img
                src="/layer7_black.svg"
                alt="Layer7"
                className={s.history_image}
              />
              <Typo.Body>Layer7 CTF</Typo.Body>
            </div>
            <Typo.BodyLarge className={s.history_date}>
              2010 ~ 2013
            </Typo.BodyLarge>
            <div className={s.history_dot} />
          </div>
        </div>
      </div>
    </Section>
  );
}
