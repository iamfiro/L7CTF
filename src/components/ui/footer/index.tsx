import { HStack, VStack } from "../stack";
import Typo from "../typo";

import s from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <VStack className={s.footer_content} gap={12}>
        <Typo.BodyLarge>Layer7 CTF</Typo.BodyLarge>
        <Typo.Body className={s.footer_address}>
          선린인터넷고등학교 정보보호과 해킹 전공동아리
          <br />
          Email. admin@layer7.kr | Insta. @sunrin_layer7
        </Typo.Body>
        <HStack className={s.footer_social_wrap}>
          <a href="#">
            <img src="/svg/instagram.svg" alt="instagram" />
          </a>
        </HStack>
      </VStack>
    </footer>
  );
}
