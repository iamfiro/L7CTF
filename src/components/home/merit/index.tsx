import { motion } from "motion/react";

import { Section, Typo } from "@/components/ui";
import { VStack } from "@/components/ui/stack";
import { useParallaxAnimation, useScrollAnimation } from "@/hooks";

import s from "./style.module.scss";

export default function Merit() {
  const textAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8,
  });

  const imageAnimation = useParallaxAnimation();

  return (
    <Section gap={48} className={s.merit}>
      <motion.div
        ref={textAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={
          textAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.8, delay: 0.2 }}
        className={s.left}
      >
        <VStack gap={16}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              textAnimation.isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typo.BodyLarge>
              문제 개쩐다는 그런 타이틀을 적어주세요
            </Typo.BodyLarge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              textAnimation.isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typo.Body>설명을 적으시오</Typo.Body>
          </motion.div>
        </VStack>
      </motion.div>
      <motion.div
        ref={imageAnimation.ref}
        style={
          imageAnimation.isInView
            ? {
                y: imageAnimation.y,
                scale: imageAnimation.scale,
              }
            : {}
        }
        className={s.image_container}
      >
        <motion.img
          src="/images/merit/merit_quiz.png"
          alt="merit"
          className={s.image}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Section>
  );
}
