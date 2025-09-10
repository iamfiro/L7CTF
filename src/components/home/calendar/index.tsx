import { File, Flag, Trophy } from "lucide-react";

import { Typo } from "@/components/ui";
import { HStack, VStack } from "@/components/ui/stack";

import s from "./style.module.scss";

export default function Calendar() {
  return (
    <section className={s.calendar}>
      <HStack className={s.content}>
        <VStack style={{ width: "50%" }} gap={16}>
          <Typo.Headline>대회 일정</Typo.Headline>
          <Typo.BodyLarge as={"p"} className={s.description}>
            대회 일정 섹션의 설명입니다
            <br />
            대회 일정은 불시에 변경될 수 있습니다.
          </Typo.BodyLarge>
        </VStack>
        <VStack style={{ width: "50%" }} gap={12}>
          <article className={`${s.card} ${s.card_now}`}>
            <VStack gap={8}>
              <Typo.Display className={s.card_title}>접수 기간</Typo.Display>
              <Typo.Body className={s.card_date}>
                2025년 11월 24일 ~ 2025년 12월 10일
              </Typo.Body>
            </VStack>
            <File />
          </article>
          <article className={`${s.card}`}>
            <VStack gap={8}>
              <Typo.Display className={s.card_title}>
                CTF 예선 대회
              </Typo.Display>
              <Typo.Body className={s.card_date}>
                2025년 11월 24일 ~ 2025년 12월 10일
              </Typo.Body>
            </VStack>
            <Flag />
          </article>
          <article className={`${s.card}`}>
            <VStack gap={8}>
              <Typo.Display className={s.card_title}>
                CTF 본선 대회
              </Typo.Display>
              <Typo.Body className={s.card_date}>
                2025년 11월 24일 ~ 2025년 12월 10일
              </Typo.Body>
            </VStack>
            <Trophy />
          </article>
        </VStack>
      </HStack>
    </section>
  );
}
