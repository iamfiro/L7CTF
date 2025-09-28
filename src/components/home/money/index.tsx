import { Section, Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";

import s from "./style.module.scss";

export default function Money() {
  const goods = [
    { id: 1, src: "/images/goods/airpods.png", alt: "상품 [AirPods]" },
    { id: 2, src: "/images/goods/iphone.webp", alt: "상품 [AirPods]" },
    { id: 3, src: "/images/goods/dreamhack.webp", alt: "상품 [AirPods]" },
  ];

  // 무한 루프를 위해 상품 배열을 2번 복사
  const duplicatedGoods = [...goods, ...goods];

  return (
    <Section gap={100}>
      <VStack align={FlexAlign.Center} gap={24} className={s.money_container}>
        <VStack align={FlexAlign.Center}>
          <Typo.BodyLarge>대회 상금</Typo.BodyLarge>
          <Typo.Headline>3,000,000원</Typo.Headline>
        </VStack>

        <VStack gap={48}>
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
                <tr>
                  <td>1등</td>
                  <td>선린인터넷고등학교장</td>
                  <td>
                    메달 및 상금
                    <br />
                    (25만원)
                  </td>
                </tr>
                <tr>
                  <td>2등</td>
                  <td>선린인터넷고등학교장</td>
                  <td>
                    메달 및 상금
                    <br />
                    (25만원)
                  </td>
                </tr>
                <tr>
                  <td>3등</td>
                  <td>선린인터넷고등학교장</td>
                  <td>
                    메달 및 상금
                    <br />
                    (10만원)
                  </td>
                </tr>
              </tbody>
            </table>
          </VStack>
          <VStack gap={24} fullWidth>
            <HStack fullWidth justify={FlexJustify.Between}>
              <Typo.Display>일반부</Typo.Display>
              <Typo.BodyLarge className={s.money_age}>20세 이상</Typo.BodyLarge>
            </HStack>
            <table className={s.table}>
              <tbody>
                <tr>
                  <td>1등</td>
                  <td>선린인터넷고등학교장</td>
                  <td>500,000원</td>
                </tr>
                <tr>
                  <td>2등</td>
                  <td>선린인터넷고등학교장</td>
                  <td>300,000원</td>
                </tr>
                <tr>
                  <td>3등</td>
                  <td>선린인터넷고등학교장</td>
                  <td>200,000원</td>
                </tr>
              </tbody>
            </table>
          </VStack>
          <div className={s.special_prize}>
            <span className={s.special_prize_title}>특별상</span>
            <span className={s.special_prize_count}>1명</span>
          </div>
        </VStack>
      </VStack>
      <VStack align={FlexAlign.Center} gap={48}>
        <Typo.BodyLarge>이 외의 다양한 상품이 준비되어 있어요</Typo.BodyLarge>
        <div className={s.carousel_container}>
          <div className={s.carousel_track}>
            <div className={s.carousel_slides}>
              {duplicatedGoods.map((item, index) => (
                <div key={`${item.id}-${index}`} className={s.carousel_slide}>
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </VStack>
    </Section>
  );
}
