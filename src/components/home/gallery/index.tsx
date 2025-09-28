import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

import { Section, Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";
import { galleryImages } from "@/data/gallery";

import s from "./style.module.scss";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 이미지로 이동
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  // 이전 이미지로 이동
  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  // 특정 인덱스로 이동
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <Section>
      <div className={s.gallery_container}>
        <Typo.Headline>갤러리</Typo.Headline>
        <VStack gap={14}>
          <div className={s.image_container} tabIndex={0}>
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className={s.image}
              loading="lazy"
            />
            {galleryImages[currentIndex].title && (
              <div className={s.image_title}>
                {galleryImages[currentIndex].title}
              </div>
            )}
          </div>

          <HStack
            fullWidth
            justify={FlexJustify.Between}
            align={FlexAlign.Center}
          >
            <button
              className={s.arrow}
              onClick={goToPrevious}
              aria-label="이전 이미지"
            >
              <ArrowLeft />
            </button>

            <HStack gap={12}>
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`${s.dot} ${index === currentIndex ? s.active : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`${index + 1}번째 이미지로 이동`}
                />
              ))}
            </HStack>

            <button
              className={s.arrow}
              onClick={goToNext}
              aria-label="다음 이미지"
            >
              <ArrowRight />
            </button>
          </HStack>
        </VStack>
      </div>
    </Section>
  );
}
