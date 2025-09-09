import { Typo } from "@/components/ui";
import { HStack } from "@/components/ui/stack";

import s from "./style.module.scss";

export default function Sponsor() {
  return (
    <section className={s.sponsor}>
      <div className={s.sponsor_wrapper}>
        <Typo.BodyLarge className={s.sponsor_text}>
          Layer7 CTF는 다음과 같은 기업들과 함께합니다
        </Typo.BodyLarge>
        <img src="/images/sponsor/theori.png" alt="sponsor" />
        <img src="/images/sponsor/hspace.png" alt="sponsor" />
      </div>
      <div className={s.sponsor_wrapper}>
        <Typo.BodyLarge className={s.sponsor_text}>대회 주최</Typo.BodyLarge>
        <HStack gap={24}>
          <img
            src="/images/sponsor/sunrin.png"
            alt="sponsor"
            className={s.sunrin}
          />
          <img src="/layer7.svg" alt="sponsor" className={s.layer7} />
        </HStack>
      </div>
    </section>
  );
}
