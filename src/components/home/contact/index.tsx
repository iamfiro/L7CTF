import { Send } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, Section, Typo } from "@/components/ui";
import { HStack, VStack } from "@/components/ui/stack";
import type { Post } from "@/utils/markdown";
import { getLatestPosts } from "@/utils/posts";

import s from "./style.module.scss";

export default function Contact() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const latestPosts = await getLatestPosts(5);
        setPosts(latestPosts);
      } catch (error) {
        console.error("공지사항을 불러오는 중 오류가 발생했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <Section>
      <HStack className={s.content}>
        <VStack className={s.notice_wrap}>
          <div className={s.notice_title}>
            <Typo.Body>공지사항</Typo.Body>
          </div>
          <VStack fullWidth>
            {loading ? (
              <div className={s.notice_item}>
                <Typo.Body>로딩 중...</Typo.Body>
              </div>
            ) : posts.length === 0 ? (
              <div className={s.notice_item}>
                <Typo.Body>공지사항이 없습니다.</Typo.Body>
              </div>
            ) : (
              posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className={s.notice_item}
                >
                  <Typo.Body>{post.metadata.title}</Typo.Body>
                  <Typo.Body className={s.notice_date}>
                    {post.metadata.date}
                  </Typo.Body>
                </a>
              ))
            )}
          </VStack>
        </VStack>
        <VStack className={s.form_wrap} gap={20}>
          <Typo.Display>문의하기</Typo.Display>
          <VStack gap={12} className={s.form} fullWidth>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={s.input}
            />
            <input type="text" placeholder="이름" className={s.input} />
            <textarea
              placeholder="문의 내용을 입력해주세요."
              className={s.textarea}
            />
            <Button leadingIcon={Send} size="lg">
              눌러서 문의하기
            </Button>
          </VStack>
        </VStack>
      </HStack>
    </Section>
  );
}
