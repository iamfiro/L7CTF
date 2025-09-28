import { ArrowUpRight } from "lucide-react";

import Section from "../section";
import { FlexAlign, HStack, VStack } from "../stack";
import Typo from "../typo";

import s from "./style.module.scss";

export default function Footer() {
  return (
    <Section padding={32}>
      <footer className={s.footer}>
        <VStack className={s.footer_content} gap={24}>
          <Typo.BodyLarge>Layer7 CTF</Typo.BodyLarge>
          <Typo.Body className={s.footer_address}>
            선린인터넷고등학교 정보보호과 해킹 전공동아리
            <br />
            Email. admin@layer7.kr | Insta. @sunrin_layer7
          </Typo.Body>
          <Typo.Subtext className={s.footer_copyright}>
            © 2025 Layer7, Hacking Club. All Rights Reserved.
          </Typo.Subtext>
        </VStack>
        <VStack gap={24} align={FlexAlign.End}>
          <HStack gap={48} className={s.moderator_wrap}>
            <VStack gap={10}>
              <Typo.Body className={s.moderator_title}>총괄</Typo.Body>
              <Typo.Body>이동건</Typo.Body>
            </VStack>
            <VStack gap={10}>
              <Typo.Body className={s.moderator_title}>운영진</Typo.Body>
              <HStack gap={8}>
                <Typo.Body>장재영</Typo.Body>
                <Typo.Body>유승주</Typo.Body>
                <Typo.Body>김세중</Typo.Body>
                <Typo.Body>최윤호</Typo.Body>
              </HStack>
            </VStack>
            <VStack gap={10}>
              <Typo.Body className={s.moderator_title}>개발자</Typo.Body>
              <Typo.Body>조성주</Typo.Body>
            </VStack>
          </HStack>
          <a href="/creator" className={s.creator_link}>
            <HStack gap={4}>
              <Typo.Body>출제자 바로가기</Typo.Body>
              <ArrowUpRight size={20} />
            </HStack>
          </a>
        </VStack>
      </footer>
    </Section>
  );
}
