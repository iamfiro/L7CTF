import { File, Flag } from "lucide-react";

export const Competition = [
  {
    icon: File,
    title: "대회 신청",
    startDate: new Date("2025-11-19T12:46:00").getTime(),
    endDate: new Date("2025-12-31T23:59:59").getTime(),
    description: "접수 당일 Layer7 CTF 웹사이트에서 공개",
    eligibility: [
      {
        name: "중등부",
        value: "만 9세 ~ 만 18세(15개 팀)",
      },
      {
        name: "고등부",
        value: "만 9세 ~ 만 18세",
      },
      {
        name: "일반부",
        value: "만 9세 ~ 만 18세)",
      },
    ],
  },
  {
    icon: Flag,
    title: "대회 본선",
    startDate: new Date("2026-01-15T00:00:00").getTime(),
    endDate: new Date("2026-01-15T23:59:59").getTime(),
    description: "대회 본선 기간입니다.",
    eligibility: [
      {
        name: "대회 장소",
        value: "온라인",
      },
      {
        name: "진행 방식",
        value: "문제풀이(Jeopardy)",
      },
    ],
    preparation: ["노트북 또는 PC", "랜선 케이블", "초코파이"],
  },
];
