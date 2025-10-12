import { motion } from "motion/react";
import { Section, Typo } from "@/components/ui";
import { FlexAlign, HStack, VStack } from "@/components/ui/stack";
import { Competition } from "@/data/competition";
import { getKoreanDate } from "@/utils/date";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks";

import s from "./style.module.scss";

export default function FormAbout() {
  const IconComponent = Competition[0].icon;

  const leftAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8
  });

  const rightAnimation = useStaggerAnimation(
    {
      threshold: 0.2,
      delay: 0.4,
      duration: 0.6
    }
  );

  return (
    <Section>
      <div className={s.form_about}>
        <motion.div
          className={s.left}
          ref={leftAnimation.ref}
          initial={{ opacity: 0, x: -100 }}
          animate={leftAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VStack gap={40}>
            <VStack gap={20}>
              <HStack gap={16} align={FlexAlign.Center}>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent color="white" size={40} />
                </motion.div>
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
        </motion.div>
        <motion.div
          className={s.right}
          ref={rightAnimation.ref}
          variants={rightAnimation.containerVariants}
          initial="hidden"
          animate={rightAnimation.isInView ? "visible" : "hidden"}
        >
          <VStack gap={20}>
            {Competition[0].eligibility?.map((eligibility) => (
              <motion.div
                key={eligibility.name}
                variants={rightAnimation.itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <HStack gap={12} align={FlexAlign.Center}>
                  <Typo.Body className={s.eligibility_name}>
                    {eligibility.name}
                  </Typo.Body>
                  <Typo.Body>{eligibility.value}</Typo.Body>
                </HStack>
              </motion.div>
            ))}
          </VStack>
        </motion.div>
      </div>
    </Section>
  );
}
