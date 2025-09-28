import { File, Flag } from "lucide-react";

export const Competition = [
  {
    icon: File,
    title: "대회 접수",
    startDate: Date.now(),
    endDate: Date.now(),
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
    startDate: Date.now(),
    endDate: Date.now(),
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
      {
        name: "참가 자격",
        value: "만 9세 ~ 만 18세",
      },
    ],
    preparation: ["컴퓨터", "인터넷"],
  },
];
