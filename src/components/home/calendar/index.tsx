import { File, Flag, Trophy } from "lucide-react";

import { Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";

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
            <HStack
              justify={FlexJustify.Between}
              align={FlexAlign.Center}
              fullWidth
            >
              <VStack gap={8}>
                <Typo.Display className={s.card_title}>접수 기간</Typo.Display>
                <Typo.Body className={s.card_date}>
                  2025년 11월 24일 ~ 2025년 12월 10일
                </Typo.Body>
              </VStack>
              <File />
            </HStack>
          </article>
          <article className={`${s.card}`}>
            <HStack
              justify={FlexJustify.Between}
              align={FlexAlign.Center}
              fullWidth
            >
              <VStack gap={8}>
                <Typo.Display className={s.card_title}>
                  CTF 예선 대회
                </Typo.Display>
                <Typo.Body className={s.card_date}>
                  2025년 11월 24일 ~ 2025년 12월 10일
                </Typo.Body>
              </VStack>
              <Flag />
            </HStack>
            <HStack gap={14}>
              <Typo.Body className={s.card_info_name}>본선 진출</Typo.Body>
              <Typo.Body className={s.card_info_value}>상위 20인</Typo.Body>
            </HStack>
            <HStack gap={14}>
              <Typo.Body className={s.card_info_name}>참가 장소</Typo.Body>
              <Typo.Body className={s.card_info_value}>
                선린인터넷고등학교
              </Typo.Body>
            </HStack>
          </article>
          <article className={`${s.card}`}>
            <HStack
              justify={FlexJustify.Between}
              align={FlexAlign.Center}
              fullWidth
            >
              <VStack gap={8}>
                <Typo.Display className={s.card_title}>
                  CTF 본선 대회
                </Typo.Display>
                <Typo.Body className={s.card_date}>
                  2025년 11월 24일 ~ 2025년 12월 10일
                </Typo.Body>
              </VStack>
              <Trophy />
            </HStack>
            <HStack gap={14}>
              <Typo.Body className={s.card_info_name}>참가 대상</Typo.Body>
              <Typo.Body className={s.card_info_value}>
                예선 상위 20인
              </Typo.Body>
            </HStack>
            <HStack gap={14}>
              <Typo.Body className={s.card_info_name}>참가 장소</Typo.Body>
              <Typo.Body className={s.card_info_value}>
                선린인터넷고등학교
              </Typo.Body>
            </HStack>
          </article>
        </VStack>
      </HStack>
    </section>
  );
}
