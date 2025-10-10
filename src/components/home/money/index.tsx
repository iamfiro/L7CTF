import { Section, Typo } from "@/components/ui";
import { FlexAlign, FlexJustify, HStack, VStack } from "@/components/ui/stack";
import { formatCurrency, getPrizeTableData, Prize } from "@/data/prize";

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

  return (
    <Section gap={100}>
      <VStack align={FlexAlign.Center} gap={24} className={s.money_container}>
        <VStack align={FlexAlign.Center}>
          <Typo.BodyLarge>대회 상금</Typo.BodyLarge>
          <Typo.Headline>{formatCurrency(Prize.total)}원</Typo.Headline>
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
                {middleSchoolData.map((row, index) => (
                  <tr key={index}>
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
                  </tr>
                ))}
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
                {generalData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.rank}</td>
                    <td>{row.certificate}</td>
                    <td>{row.prize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </VStack>
          <div className={s.special_prize}>
            <Typo.Body>
              수상자 전원에게 대회 굿즈와 후원사 굿즈가 담긴 패키지 박스를
              드립니다.
            </Typo.Body>
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
