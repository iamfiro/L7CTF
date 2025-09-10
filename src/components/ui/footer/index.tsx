import { HStack, VStack } from "../stack";
import Typo from "../typo";

import s from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <VStack className={s.footer_content} gap={12}>
        <Typo.BodyLarge>Layer7 CTF</Typo.BodyLarge>
        <Typo.Body className={s.footer_address}>
          서울특별시 용산구 원효로97길 33-4
        </Typo.Body>
        <HStack className={s.footer_social}>
          <a href="#">
            <img src="/svg/instagram.svg" alt="instagram" />
          </a>
        </HStack>
      </VStack>
    </footer>
  );
}
