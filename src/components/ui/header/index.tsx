import { ArrowUpRight } from "lucide-react";

import Button from "../button";
import { HStack } from "../stack";
import Typo from "../typo";

import s from "./style.module.scss";

export default function Header() {
  return (
    <header className={s.header}>
      <ul className={s.header_menu}>
        <li>
          <a href="#">
            <Typo.Body>CTF</Typo.Body>
          </a>
          <a href="#">
            <Typo.Body>Layer7</Typo.Body>
          </a>
          <a href="#">
            <Typo.Body>Winners</Typo.Body>
          </a>
          <a href="#">
            <Typo.Body>Discord</Typo.Body>
            <ArrowUpRight />
          </a>
        </li>
      </ul>
      <img src="/layer7.svg" alt="Layer7 logo" className={s.header_logo} />
      <HStack gap={10}>
        <Button variant="secondary">문의하기</Button>
        <Button>Layer7 CTF 참가 신청하기</Button>
      </HStack>
    </header>
  );
}
