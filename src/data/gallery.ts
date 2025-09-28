export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/hi.png",
    alt: "갤러리 이미지 1",
    title: "CTF 대회 현장",
  },
  {
    id: "2",
    src: "/images/gallery/sample.png",
    alt: "갤러리 이미지 2",
    title: "해킹 대회 참가자들",
  },
  {
    id: "3",
    src: "/images/gallery/sample copy.png",
    alt: "갤러리 이미지 3",
    title: "보안 컨퍼런스",
  },
  {
    id: "4",
    src: "/images/gallery/sample copy 3.png",
    alt: "갤러리 이미지 4",
    title: "네트워크 보안 세션",
  },
  {
    id: "5",
    src: "/images/gallery/sample copy 4.png",
    alt: "갤러리 이미지 5",
    title: "시상식 현장",
  },
];
