import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, Section, Typo } from "@/components/ui";
import { HStack, VStack } from "@/components/ui/stack";
import type { Post } from "@/utils/markdown";
import { getLatestPosts } from "@/utils/posts";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks";

import s from "./style.module.scss";

export default function Contact() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const leftAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.2,
    duration: 0.8
  });

  const rightAnimation = useScrollAnimation({
    threshold: 0.2,
    delay: 0.4,
    duration: 0.8
  });

  const formAnimation = useStaggerAnimation(4, {
    threshold: 0.2,
    delay: 0.6,
    duration: 0.6
  });

  const noticeAnimation = useStaggerAnimation(5, {
    threshold: 0.2,
    delay: 0.4,
    duration: 0.6
  });

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
        <motion.div
          className={s.notice_wrap}
          id="notice"
          ref={leftAnimation.ref}
          initial={{ opacity: 0, x: -100 }}
          animate={leftAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={s.notice_title}>
            <Typo.Body>공지사항</Typo.Body>
          </div>
          <motion.div
            ref={noticeAnimation.ref}
            variants={noticeAnimation.containerVariants}
            initial="hidden"
            animate={noticeAnimation.isInView ? "visible" : "hidden"}
          >
            <VStack fullWidth>
              {loading ? (
                <motion.div
                  className={s.notice_item}
                  variants={noticeAnimation.itemVariants}
                >
                  <Typo.Body>로딩 중...</Typo.Body>
                </motion.div>
              ) : posts.length === 0 ? (
                <motion.div
                  className={s.notice_item}
                  variants={noticeAnimation.itemVariants}
                >
                  <Typo.Body>공지사항이 없습니다.</Typo.Body>
                </motion.div>
              ) : (
                posts.map((post) => (
                  <motion.a
                    key={post.slug}
                    href={`/article/${post.slug}`}
                    className={s.notice_item}
                    variants={noticeAnimation.itemVariants}
                  >
                    <Typo.Body>{post.metadata.title}</Typo.Body>
                    <Typo.Body className={s.notice_date}>
                      {post.metadata.date}
                    </Typo.Body>
                  </motion.a>
                ))
              )}
            </VStack>
          </motion.div>
        </motion.div>
        <motion.div
          className={s.form_wrap}
          ref={rightAnimation.ref}
          initial={{ opacity: 0, x: 100 }}
          animate={rightAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typo.Display>문의하기</Typo.Display>
          <motion.div
            ref={formAnimation.ref}
            variants={formAnimation.containerVariants}
            initial="hidden"
            animate={formAnimation.isInView ? "visible" : "hidden"}
            style={{ marginTop: 24 }}
          >
            <VStack gap={12} className={s.form} fullWidth>
              <motion.input
                type="email"
                placeholder="example@gmail.com"
                className={s.input}
                variants={formAnimation.itemVariants}
                whileFocus={{ scale: 1.02, borderColor: "#007bff" }}
                transition={{ duration: 0.3 }}
              />
              <motion.input
                type="text"
                placeholder="이름"
                className={s.input}
                variants={formAnimation.itemVariants}
                whileFocus={{ scale: 1.02, borderColor: "#007bff" }}
                transition={{ duration: 0.3 }}
              />
              <motion.textarea
                placeholder="문의 내용을 입력해주세요."
                className={s.textarea}
                variants={formAnimation.itemVariants}
                whileFocus={{ scale: 1.02, borderColor: "#007bff" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                variants={formAnimation.itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button leadingIcon={Send} size="lg">
                  눌러서 문의하기
                </Button>
              </motion.div>
            </VStack>
          </motion.div>
        </motion.div>
      </HStack>
    </Section>
  );
}
