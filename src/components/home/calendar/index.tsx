import { motion } from "motion/react";
import { File, Flag, Trophy } from "lucide-react";

import { Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks";

import s from "./style.module.scss";

export default function Calendar() {
  const titleAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8
  });

  const cardAnimation = useStaggerAnimation(3, {
    threshold: 0.2,
    delay: 0.4,
    duration: 0.6
  });

  return (
    <section className={s.calendar}>
      <HStack className={s.content}>
        <motion.div
          style={{ width: "50%" }}
          ref={titleAnimation.ref}
          initial={{ opacity: 0, y: 50 }}
          animate={titleAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VStack gap={16}>
            <Typo.Headline>대회 일정</Typo.Headline>
            <Typo.BodyLarge as={"p"} className={s.description}>
              대회 일정 섹션의 설명입니다
              <br />
              대회 일정은 불시에 변경될 수 있습니다.
            </Typo.BodyLarge>
          </VStack>
        </motion.div>
        <motion.div
          style={{ width: "50%" }}
          ref={cardAnimation.ref}
          variants={cardAnimation.containerVariants}
          initial="hidden"
          animate={cardAnimation.isInView ? "visible" : "hidden"}
        >
          <VStack gap={12}>
            <motion.article 
              className={`${s.card} ${s.card_now}`}
              variants={cardAnimation.itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
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
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <File />
                </motion.div>
              </HStack>
            </motion.article>
            <motion.article 
              className={`${s.card}`}
              variants={cardAnimation.itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
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
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Flag />
                </motion.div>
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
            </motion.article>
            <motion.article 
              className={`${s.card}`}
              variants={cardAnimation.itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
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
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Trophy />
                </motion.div>
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
            </motion.article>
          </VStack>
        </motion.div>
      </HStack>
    </section>
  );
}
