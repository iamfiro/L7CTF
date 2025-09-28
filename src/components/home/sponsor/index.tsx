import { Section, Typo } from "@/components/ui";
import { FlexAlign, HStack, VStack } from "@/components/ui/stack";

import s from "./style.module.scss";

export default function Sponsor() {
  return (
    <Section padding={32} gap={64}>
      <Hosting />
      <div className={s.sponsor_wrap}>
        <Typo.Body className={s.sponsor_text}>
          Layer7 CTF는 다음과 같은 기업들과 함께합니다
        </Typo.Body>
        <VStack gap={64}>
          <VStack gap={24} align={FlexAlign.Center}>
            <div className={`${s.sponsor_title} ${s.diamond}`}>
              <Typo.Body>Diamond Sponsor</Typo.Body>
            </div>
            <VStack gap={18} align={FlexAlign.Center}>
              <img src="/images/sponsor/theori.png" alt="Theori sponsor" />
              <img src="/images/sponsor/hspace.png" alt="Hspace sponsor" />
            </VStack>
          </VStack>
          <VStack gap={24} align={FlexAlign.Center}>
            <div className={`${s.sponsor_title} ${s.gold}`}>
              <Typo.Body>Gold Sponsor</Typo.Body>
            </div>
            <VStack gap={18} align={FlexAlign.Center}>
              <img src="/images/sponsor/theori.png" alt="Theori sponsor" />
              <img src="/images/sponsor/hspace.png" alt="Hspace sponsor" />
            </VStack>
          </VStack>
        </VStack>
      </div>
    </Section>
  );
}

function Hosting() {
  return (
    <HStack gap={48}>
      <HStack gap={20} align={FlexAlign.Center}>
        <Typo.Body className={s.sponsor_text}>주최</Typo.Body>
        <HStack gap={12}>
          <img
            src="/images/sponsor/sunrin.png"
            alt="Sunrin sponsor"
            className={s.sunrin}
          />
          <Typo.BodyLarge>선린인터넷고등학교</Typo.BodyLarge>
        </HStack>
      </HStack>
      <HStack gap={20} align={FlexAlign.Center}>
        <Typo.Body className={s.sponsor_text}>주관</Typo.Body>
        <HStack gap={12}>
          <img src="/layer7.svg" alt="Layer7 sponsor" className={s.layer7} />
          <Typo.BodyLarge>Layer7</Typo.BodyLarge>
        </HStack>
      </HStack>
    </HStack>
  );
}
