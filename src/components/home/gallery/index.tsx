import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import { Section, Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";
import { useScrollAnimation } from "@/hooks";

import s from "./style.module.scss";

// 갤러리 이미지들을 동적으로 가져오기
const galleryModules = import.meta.glob(
  "/public/images/gallery/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    as: "url",
  },
);

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const titleAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8
  });

  const galleryAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.4,
    duration: 0.8
  });

  // 갤러리 이미지 배열 생성
  const galleryImages = useMemo(() => {
    return Object.entries(galleryModules).map(([path, url], index) => {
      const fileName = path.split("/").pop()?.split(".")[0] || "";
      return {
        id: `gallery-${index + 1}`,
        src: url as string,
        alt: `갤러리 이미지 ${index + 1}`,
        title: fileName
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
      };
    });
  }, []);

  // 다음 이미지로 이동
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  // 이전 이미지로 이동
  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  }, [galleryImages.length]);

  // 특정 인덱스로 이동
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <Section>
      <div className={s.gallery_container}>
        <motion.div 
          ref={titleAnimation.ref}
          initial={{ opacity: 0, y: 50 }}
          animate={titleAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typo.Headline>갤러리</Typo.Headline>
        </motion.div>
        <motion.div 
          ref={galleryAnimation.ref}
          initial={{ opacity: 0, y: 50 }}
          animate={galleryAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <VStack gap={24}>
                     <motion.div 
                       className={s.image_container} 
                       tabIndex={0}
                     >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ 
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: 1
                  }}
                  exit={{ 
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className={s.image}
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <HStack
              fullWidth
              justify={FlexJustify.Between}
              align={FlexAlign.Center}
            >
              <motion.button
                className={s.arrow}
                onClick={goToPrevious}
                aria-label="이전 이미지"
              >
                <ArrowLeft />
              </motion.button>

              <HStack gap={12}>
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`${s.dot} ${index === currentIndex ? s.active : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`${index + 1}번째 이미지로 이동`}
                  />
                ))}
              </HStack>

              <motion.button
                className={s.arrow}
                onClick={goToNext}
                aria-label="다음 이미지"
              >
                <ArrowRight />
              </motion.button>
            </HStack>
          </VStack>
        </motion.div>
      </div>
    </Section>
  );
}
