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
          <HStack gap={8} align={FlexAlign.Center}>
            <img
              src="/layer7.svg"
              alt="Layer7 logo"
              className={s.footer_logo}
            />
            <Typo.BodyLarge>Layer7</Typo.BodyLarge>
          </HStack>
          <Typo.Body className={s.footer_address}>
            선린인터넷고등학교 정보보호과 해킹 전공동아리
            <br />
            Email. admin@layer7.kr | Insta. @sunrin_layer7
          </Typo.Body>
          <Typo.Subtext className={s.footer_copyright}>
            © 2025 Layer7, Hacking Club. All Rights Reserved.
          </Typo.Subtext>
        </VStack>
        <VStack gap={12} align={FlexAlign.End} className={s.footer_right}>
          <HStack gap={24}>
            <a href="/makers" className={s.creator_link}>
              <HStack gap={4}>
                <Typo.Body>Instagram</Typo.Body>
                <ArrowUpRight size={20} />
              </HStack>
            </a>
            <a href="/makers" className={s.creator_link}>
              <HStack gap={4}>
                <Typo.Body>Facebook</Typo.Body>
                <ArrowUpRight size={20} />
              </HStack>
            </a>
          </HStack>
          <HStack gap={24}>
            <a href="/makers" className={s.creator_link}>
              <HStack gap={4}>
                <Typo.Body>Github</Typo.Body>
                <ArrowUpRight size={20} />
              </HStack>
            </a>
            <a href="/makers" className={s.creator_link}>
              <HStack gap={4}>
                <Typo.Body>Blog</Typo.Body>
                <ArrowUpRight size={20} />
              </HStack>
            </a>
          </HStack>
        </VStack>
      </footer>
    </Section>
  );
}
