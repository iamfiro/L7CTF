import { Post, PostMetadata, parseFrontmatter, generateSlug, formatDate, markdownToHtml } from './markdown';
import { Article } from '@/types/article';

/**
 * posts 폴더에서 모든 마크다운 파일을 가져와서 파싱합니다.
 * Vite의 import.meta.glob을 사용하여 동적으로 파일을 가져옵니다.
 */
export async function getAllPosts(): Promise<Post[]> {
  // Vite의 import.meta.glob을 사용하여 posts 폴더의 모든 .md 파일을 가져옵니다
  const modules = import.meta.glob('/src/posts/*.md', { as: 'raw' });
  
  const posts: Post[] = [];
  
  for (const path in modules) {
    try {
      const content = await modules[path]();
      const { metadata, content: postContent } = parseFrontmatter(content);
      
      // 파일명에서 슬러그 생성
      const filename = path.split('/').pop() || '';
      const slug = generateSlug(filename);
      
      // 파일 수정 시간을 기반으로 날짜 설정 (metadata에 date가 없으면)
      const fileDate = new Date(); // 실제로는 파일 시스템에서 가져와야 하지만, 여기서는 현재 시간 사용
      const postDate = metadata.date || formatDate(fileDate);
      
      posts.push({
        slug,
        metadata: {
          ...metadata,
          date: postDate
        },
        content: postContent
      });
    } catch (error) {
      console.error(`Error loading post from ${path}:`, error);
    }
  }
  
  // 날짜 기준으로 내림차순 정렬 (최신순)
  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date || '');
    const dateB = new Date(b.metadata.date || '');
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * 최신 공지사항만 가져옵니다.
 */
export async function getLatestPosts(limit: number = 5): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

/**
 * Article 타입으로 모든 공지사항을 가져옵니다.
 */
export function getAllArticles(): Article[] {
  const modules = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });
  
  const articles: Article[] = [];
  
  for (const path in modules) {
    try {
      const content = modules[path] as string;
      const { metadata, content: postContent } = parseFrontmatter(content);
      
      // 파일명에서 슬러그 생성
      const filename = path.split('/').pop() || '';
      const slug = generateSlug(filename);
      
      // 파일 수정 시간을 기반으로 날짜 설정 (metadata에 date가 없으면)
      const fileDate = new Date();
      const postDate = metadata.date || formatDate(fileDate);
      
      articles.push({
        slug,
        title: metadata.title || '제목 없음',
        date: postDate,
        content: markdownToHtml(postContent)
      });
    } catch (error) {
      console.error(`Error loading article from ${path}:`, error);
    }
  }
  
  // 날짜 기준으로 내림차순 정렬 (최신순)
  return articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * 슬러그로 특정 공지사항을 가져옵니다.
 */
export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find(article => article.slug === slug) || null;
}
