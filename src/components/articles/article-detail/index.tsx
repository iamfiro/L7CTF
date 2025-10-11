import { useParams } from "react-router-dom";
import { Section, Typo } from "@/components/ui";
import { getArticleBySlug } from "@/utils/posts";

import s from "./style.module.scss";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleBySlug(id) : null;

  if (!article) {
    return (
      <Section padding={32} gap={64}>
        <div className={s.container}>
          <Typo.Headline>게시글을 찾을 수 없습니다.</Typo.Headline>
        </div>
      </Section>
    );
  }

  return (
    <Section padding={32} gap={64}>
      <div className={s.container}>
        <div className={s.header}>
          <Typo.Headline className={s.title}>{article.title}</Typo.Headline>
          <Typo.Body className={s.date}>
            {new Date(article.date).toLocaleDateString('ko-KR')}
          </Typo.Body>
        </div>

        <div className={s.content}>
          <div 
            className={s.markdown}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </Section>
  );
}
