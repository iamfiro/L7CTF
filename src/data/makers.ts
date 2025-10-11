export interface ProblemSetter {
  name: string;
  role: string;
}

// 문제 출제자 데이터
export const ProblemSetters: { [year: string]: ProblemSetter[] } = {
  "2025": [
    { name: "이동건", role: "Layer7 25기 부장" },
    { name: "김민수", role: "Layer7 24기" },
    { name: "박지영", role: "Layer7 23기" },
    { name: "이준호", role: "Layer7 22기" },
    { name: "최수진", role: "Layer7 21기" },
    { name: "정현우", role: "Layer7 20기" },
    { name: "한소영", role: "Layer7 19기" },
    { name: "강태민", role: "Layer7 18기" },
    { name: "윤서연", role: "Layer7 17기" },
    { name: "조민재", role: "Layer7 16기" },
  ],
  "2024": [
    { name: "이동건", role: "Layer7 24기 부장" },
    { name: "김도현", role: "Layer7 23기" },
    { name: "박서준", role: "Layer7 22기" },
    { name: "이예린", role: "Layer7 21기" },
    { name: "최민석", role: "Layer7 20기" },
    { name: "정유진", role: "Layer7 19기" },
    { name: "한지훈", role: "Layer7 18기" },
    { name: "강나연", role: "Layer7 17기" },
    { name: "윤태현", role: "Layer7 16기" },
    { name: "조수빈", role: "Layer7 15기" },
  ],
  "2023": [
    { name: "이동건", role: "Layer7 23기 부장" },
    { name: "김지호", role: "Layer7 22기" },
    { name: "박민지", role: "Layer7 21기" },
    { name: "이준서", role: "Layer7 20기" },
    { name: "최하늘", role: "Layer7 19기" },
    { name: "정태우", role: "Layer7 18기" },
    { name: "한소미", role: "Layer7 17기" },
    { name: "강민규", role: "Layer7 16기" },
    { name: "윤서아", role: "Layer7 15기" },
  ],
};

export function getMakerYears() {
  return Object.keys(ProblemSetters).sort((a, b) => b.localeCompare(a));
}