import { Typo } from "@/components/ui";
import { FlexAlign, VStack } from "@/components/ui/stack";

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
    <section className={s.money}>
      <VStack align={FlexAlign.Center}>
        <Typo.Headline>대회 상금</Typo.Headline>
        <Typo.Headline className={s.money_title}>3,000,000원</Typo.Headline>

        <table className={s.table}>
          <thead>
            <tr>
              <th>구분</th>
              <th>주관</th>
              <th>인원</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>본상</td>
              <td>선린인터넷고등학교장</td>
              <td>중고등부/고등부 상위 3명씩</td>
            </tr>
            <tr>
              <td>티오리 대표상</td>
              <td>Theori</td>
              <td>1명</td>
            </tr>
            <tr>
              <td>Hspace 대표상</td>
              <td>Hspace</td>
              <td>1명</td>
            </tr>
          </tbody>
        </table>
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
    </section>
  );
}
