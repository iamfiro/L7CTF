export interface Winner {
  name: string;
  team?: string;
}

export interface DivisionWinners {
  first: Winner;
  second: Winner;
  third: Winner;
}

export interface YearWinners {
  adult: DivisionWinners;
  highSchool: DivisionWinners;
  middleSchool: DivisionWinners;
}

export interface WinnersData {
  [year: string]: YearWinners;
}

// 샘플 데이터
export const Winners: WinnersData = {
  "2025": {
    adult: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
    highSchool: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
    middleSchool: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
  },
  "2024": {
    adult: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
    highSchool: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
    middleSchool: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
  },
  "2023": {
    adult: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
    highSchool: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
    middleSchool: {
      first: { name: "Hide on ba/sh" },
      second: { name: "Hide on ba/sh" },
      third: { name: "Hide on ba/sh" },
    },
  },
};

// 유틸리티 함수들
export const getDivisionName = (division: keyof YearWinners): string => {
  const divisionNames = {
    adult: "성인부",
    highSchool: "고등부",
    middleSchool: "중등부",
  };
  return divisionNames[division];
};

export const getRankName = (rank: keyof DivisionWinners): string => {
  const rankNames = {
    first: "1위",
    second: "2위",
    third: "3위",
  };
  return rankNames[rank];
};

export const getYears = (): string[] => {
  return Object.keys(Winners).sort((a, b) => b.localeCompare(a));
};
