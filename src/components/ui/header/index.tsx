import { ArrowUpRight, ChevronUp } from "lucide-react";

import Button from "../button";
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
      <Button leadingIcon={ArrowUpRight}>대회 참가 신청하기</Button>
    </header>
  );
}
