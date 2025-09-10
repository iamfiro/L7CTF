import { ArrowUpRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import Button from "../button";
import { HStack } from "../stack";
import Typo from "../typo";

import s from "./style.module.scss";

export default function Header() {
  const pathname = useLocation().pathname;
  return (
    <header className={s.header}>
      <div className={s.header_wrap}>
        <ul className={s.header_menu}>
          <li>
            <a href="#" data-active={pathname === "/"}>
              <Typo.Body>CTF</Typo.Body>
            </a>
            <a href="#" data-active={pathname === "/layer7"}>
              <Typo.Body>Layer7</Typo.Body>
            </a>
            <a href="#" data-active={pathname === "/winners"}>
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
      </div>
    </header>
  );
}
