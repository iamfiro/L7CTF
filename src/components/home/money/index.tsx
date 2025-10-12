import { motion } from "motion/react";
import { Section, Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";
import { formatCurrency, getPrizeTableData, Prize } from "@/data/prize";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks";

import s from "./style.module.scss";

export default function Money() {
  const goods = [
    { id: 1, src: "/images/goods/airpods.png", alt: "상품 [AirPods]" },
    { id: 2, src: "/images/goods/iphone.webp", alt: "상품 [iPhone]" },
    { id: 3, src: "/images/goods/dreamhack.webp", alt: "상품 [DreamHack]" },
  ];

  const duplicatedGoods = [...goods, ...goods];

  const middleSchoolData = getPrizeTableData(Prize.middle);
  const generalData = getPrizeTableData(Prize.general);

  const titleAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8
  });

  const tableAnimation = useStaggerAnimation(2, {
    threshold: 0.2,
    delay: 0.4,
    duration: 0.6
  });

  const carouselAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.6,
    duration: 0.8
  });

  return (
    <Section gap={100}>
      <motion.div
        className={s.money_container}
        ref={titleAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={titleAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <VStack align={FlexAlign.Center}>
          <Typo.BodyLarge>대회 상금</Typo.BodyLarge>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={titleAnimation.isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typo.Headline className={s.money_title}>{formatCurrency(Prize.total)}원</Typo.Headline>
          </motion.div>
        </VStack>

        <motion.div
          ref={tableAnimation.ref}
          variants={tableAnimation.containerVariants}
          initial="hidden"
          animate={tableAnimation.isInView ? "visible" : "hidden"}
        >
          <VStack gap={48} className={s.money_table}>
            <motion.div
              variants={tableAnimation.itemVariants}
            >
              <VStack gap={24} fullWidth>
                <HStack fullWidth justify={FlexJustify.Between}>
                  <Typo.Display>중등부/고등부</Typo.Display>
                  <Typo.BodyLarge className={s.money_age}>
                    14세 ~ 19세
                  </Typo.BodyLarge>
                </HStack>
                <table className={s.table}>
                  <thead>
                    <tr>
                      <Typo.Body as="th">구분</Typo.Body>
                      <Typo.Body as="th">상장</Typo.Body>
                      <Typo.Body as="th">부상</Typo.Body>
                    </tr>
                  </thead>
                </table>
                <table className={s.table}>
                  <tbody>
                    {middleSchoolData.map((row, index) => (
                      <motion.tr 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={tableAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <td>{row.rank}</td>
                        <td>{row.certificate}</td>
                        <td>
                          {row.prize.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < row.prize.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </VStack>
            </motion.div>
            <motion.div
              variants={tableAnimation.itemVariants}
            >
              <VStack gap={24} fullWidth>
                <HStack fullWidth justify={FlexJustify.Between}>
                  <Typo.Display>일반부</Typo.Display>
                  <Typo.BodyLarge className={s.money_age}>20세 이상</Typo.BodyLarge>
                </HStack>
                <table className={s.table}>
                  <tbody>
                    {generalData.map((row, index) => (
                      <motion.tr 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={tableAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <td>{row.rank}</td>
                        <td>{row.certificate}</td>
                        <td>{row.prize}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </VStack>
            </motion.div>
            <motion.div
              className={s.special_prize}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={tableAnimation.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Typo.Body>
                수상자 전원에게 대회 굿즈와 후원사 굿즈가 담긴 패키지 박스를
                드립니다.
              </Typo.Body>
            </motion.div>
          </VStack>
        </motion.div>
      </motion.div>
      <motion.div
        {...carouselAnimation.motionProps}
      >
        <Typo.BodyLarge>이 외의 다양한 상품이 준비되어 있어요</Typo.BodyLarge>
        <div className={s.carousel_container}>
          <motion.div 
            className={s.carousel_track}
            animate={{
              x: [0, -100 * duplicatedGoods.length / 2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={s.carousel_slides}>
              {duplicatedGoods.map((item, index) => (
                <motion.div 
                  key={`${item.id}-${index}`} 
                  className={s.carousel_slide}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.src} alt={item.alt} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
