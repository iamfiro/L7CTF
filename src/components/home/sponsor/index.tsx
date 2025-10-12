import { motion } from "motion/react";
import { Section, Typo } from "@/components/ui";
import { FlexAlign, HStack, VStack } from "@/components/ui/stack";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks";

import s from "./style.module.scss";

export default function Sponsor() {
  const hostingAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8
  });

  const sponsorAnimation = useStaggerAnimation({
    threshold: 0.2,
    delay: 0.4,
    duration: 0.6
  });

  return (
    <Section padding={32} gap={64}>
      <motion.div 
        ref={hostingAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={hostingAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hosting />
      </motion.div>
      <motion.div 
        className={s.sponsor_wrap}
        ref={sponsorAnimation.ref}
        variants={sponsorAnimation.containerVariants}
        initial="hidden"
        animate={sponsorAnimation.isInView ? "visible" : "hidden"}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sponsorAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typo.Body className={s.sponsor_text}>
            Layer7 CTF는 다음과 같은 기업들과 함께합니다
          </Typo.Body>
        </motion.div>
        <VStack gap={64}>
          <motion.div
            variants={sponsorAnimation.itemVariants}
          >
            <VStack gap={24} align={FlexAlign.Center}>
              <div className={`${s.sponsor_title} ${s.diamond}`}>
                <Typo.Body>Diamond Sponsor</Typo.Body>
              </div>
              <VStack gap={18} align={FlexAlign.Center}>
                <motion.img 
                  src="/images/sponsor/theori.png" 
                  alt="Theori sponsor"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src="/images/sponsor/hspace.png" 
                  alt="Hspace sponsor"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                />
              </VStack>
            </VStack>
          </motion.div>
          <motion.div
            variants={sponsorAnimation.itemVariants}
          >
            <VStack gap={24} align={FlexAlign.Center}>
              <div className={`${s.sponsor_title} ${s.gold}`}>
                <Typo.Body>Gold Sponsor</Typo.Body>
              </div>
              <VStack gap={18} align={FlexAlign.Center}>
                <motion.img 
                  src="/images/sponsor/theori.png" 
                  alt="Theori sponsor"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src="/images/sponsor/hspace.png" 
                  alt="Hspace sponsor"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                />
              </VStack>
            </VStack>
          </motion.div>
        </VStack>
      </motion.div>
    </Section>
  );
}

function Hosting() {
  return (
    <div className={s.hosting}>
      <HStack gap={20} align={FlexAlign.Center}>
        <Typo.Body className={s.sponsor_text}>주최</Typo.Body>
        <HStack gap={12}>
          <motion.img
            src="/images/sponsor/sunrin.png"
            alt="Sunrin sponsor"
            className={s.sunrin}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <Typo.BodyLarge>선린인터넷고등학교</Typo.BodyLarge>
        </HStack>
      </HStack>
      <HStack gap={20} align={FlexAlign.Center}>
        <Typo.Body className={s.sponsor_text}>주관</Typo.Body>
        <HStack gap={12}>
          <motion.img 
            src="/layer7.svg" 
            alt="Layer7 sponsor" 
            className={s.layer7}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <Typo.BodyLarge>Layer7</Typo.BodyLarge>
        </HStack>
      </HStack>
    </div>
  );
}
