import { Download } from "lucide-react";

import { Button, Section, Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";
import { Competition } from "@/data/competition";
import { getKoreanDate } from "@/utils/date";

import s from "./style.module.scss";

export default function CompetitionAbout() {
  const IconComponent = Competition[1].icon;

  return (
    <Section>
      <div className={s.form_about}>
        <img
          src="/images/competition/sample.png"
          className={s.image}
          alt="competition"
        />
        <div className={s.content}>
          <VStack className={s.left} gap={40}>
            <VStack gap={20}>
              <HStack gap={16} align={FlexAlign.Center}>
                <IconComponent color="white" size={40} />
                <Typo.Headline>{Competition[1].title}</Typo.Headline>
              </HStack>
              <Typo.BodyLarge>
                {getKoreanDate(new Date(Competition[1].startDate))} ~{" "}
                {getKoreanDate(new Date(Competition[1].endDate))}
              </Typo.BodyLarge>
            </VStack>
            <VStack gap={20}>
              {Competition[1].eligibility?.map((eligibility) => (
                <HStack
                  gap={12}
                  align={FlexAlign.Center}
                  key={eligibility.name}
                >
                  <Typo.Body className={s.eligibility_name}>
                    {eligibility.name}
                  </Typo.Body>
                  <Typo.Body>{eligibility.value}</Typo.Body>
                </HStack>
              ))}
            </VStack>
            <Typo.Subtext className={s.eligibility_description}>
              * 부정행위, 서류증빙 미흡 등으로 인한 부적격팀 발생 시 차상위팀
              본선 진출
            </Typo.Subtext>
          </VStack>
          <VStack
            className={s.right}
            align={FlexAlign.End}
            justify={FlexJustify.Between}
          >
            <VStack gap={24} align={FlexAlign.End}>
              <Typo.BodyLarge>{Competition[1].description}</Typo.BodyLarge>
              <VStack gap={6} align={FlexAlign.End}>
                <Typo.Body className={s.preparation_name}>준비물</Typo.Body>
                <VStack>
                  <Typo.Body>
                    {Competition[1].preparation?.join(", ")}
                  </Typo.Body>
                </VStack>
              </VStack>
            </VStack>
            <Button size="lg" leadingIcon={Download}>
              대회규칙 / 운영규정 다운 받기
            </Button>
          </VStack>
        </div>
        <div className={s.cheat_warning}>
          <span>
            부정행위는 서버 로그 분석 및 문제풀이 검토 등을 통해 대회 종료
            이후에도 적발될 수 있습니다. 부정행위가 적발될 경우 운영진의 판단과
            권한으로 참가 자격이 박탈되고,
            <br /> 모든 민형사상 책임은 참가자에게 귀속되며 차년도 참가 자격이
            제한됩니다.
          </span>
        </div>
      </div>
    </Section>
  );
}
