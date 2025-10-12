import { motion } from "motion/react";
import { Button, Typo } from "@/components/ui";
import Spacing from "@/components/ui/spacing";
import { FlexAlign, HStack, VStack } from "@/components/ui/stack";
import { useScrollAnimation, useParallaxAnimation } from "@/hooks";

import s from "./style.module.scss";

export default function Hero() {
  const textAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8
  });

  const buttonAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.6,
    duration: 0.8
  });

  const mapAnimation = useParallaxAnimation();

  return (
    <section className={s.hero}>
      <motion.div 
        className={s.hero_text}
        ref={textAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={textAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <VStack gap={12} align={FlexAlign.Center}>
          <motion.h2 
            className={s.hero_subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={textAnimation.isInView ? { 
              opacity: 1, 
              y: 0
            } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            We hack the
          </motion.h2>
          <motion.h1 
            className={s.hero_title}
            initial={{ opacity: 0, y: 20 }}
            animate={textAnimation.isInView ? { 
              opacity: 1, 
              y: 0
            } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            2025 Layer7 CTF
          </motion.h1>
        </VStack>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={textAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Typo.BodyLarge className={s.hero_description}>
            2025.11.24 - 선린인터넷고등학교
          </Typo.BodyLarge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={buttonAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className={s.buttons}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={buttonAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button size="lg" variant="secondary">
                문의하기
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={buttonAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button size="lg">Layer7 CTF 참가 신청하기</Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <Spacing size={120} />
      <motion.div
        ref={mapAnimation.ref}
        initial={{ y: 50 }}
        animate={mapAnimation.isInView ? {
          y: 0
        } : {
          y: 50
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }}
        className={s.hero_map_container}
      >
        <motion.div
          className={s.hero_map_inner}
          style={{ opacity: mapAnimation.isInView ? mapAnimation.opacity : 0 }}
        >
          <img src="/images/hero/map.svg" alt="Layer7 CTF" className={s.hero_map} />
          <div className={s.hero_map_overlay} />
        </motion.div>
      </motion.div>
    </section>
  );
}
