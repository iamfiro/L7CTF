import { Section, Typo } from "@/components/ui";
import { VStack } from "@/components/ui/stack";

import s from "./style.module.scss";

export default function Merit() {
  return (
    <Section gap={48} className={s.merit}>
      <VStack gap={16} className={s.left}>
        <Typo.BodyLarge>문제 개쩐다는 그런 타이틀을 적어주세요</Typo.BodyLarge>
        <Typo.Body>설명을 적으시오</Typo.Body>
      </VStack>
      <img src="/images/merit/merit_quiz.png" alt="merit" className={s.image} />
    </Section>
  );
}
