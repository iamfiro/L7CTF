import { Section, Typo } from "@/components/ui";
import { FlexAlign, HStack, VStack } from "@/components/ui/stack";
import { Competition } from "@/data/competition";
import { getKoreanDate } from "@/utils/date";

import s from "./style.module.scss";

export default function FormAbout() {
  const IconComponent = Competition[0].icon;

  return (
    <Section>
      <div className={s.form_about}>
        <VStack className={s.left} gap={40}>
          <VStack gap={20}>
            <HStack gap={16} align={FlexAlign.Center}>
              <IconComponent color="white" size={40} />
              <Typo.Headline>{Competition[0].title}</Typo.Headline>
            </HStack>
            <Typo.BodyLarge>
              {getKoreanDate(new Date(Competition[0].startDate))} ~{" "}
              {getKoreanDate(new Date(Competition[0].endDate))}
            </Typo.BodyLarge>
          </VStack>
          <Typo.BodyLarge className={s.description}>
            {Competition[0].description}
          </Typo.BodyLarge>
        </VStack>
        <VStack className={s.right} gap={20}>
          {Competition[0].eligibility?.map((eligibility) => (
            <HStack gap={12} align={FlexAlign.Center} key={eligibility.name}>
              <Typo.Body className={s.eligibility_name}>
                {eligibility.name}
              </Typo.Body>
              <Typo.Body>{eligibility.value}</Typo.Body>
            </HStack>
          ))}
        </VStack>
      </div>
    </Section>
  );
}
