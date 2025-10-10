export interface PrizeInfo {
  medal: boolean;
  prize: number;
}

export interface PrizeCategory {
  first: PrizeInfo;
  second: PrizeInfo;
  third: PrizeInfo;
}

export interface PrizeData {
  total: number;
  middle: PrizeCategory;
  general: PrizeCategory;
}

export const Prize: PrizeData = {
  total: 3000000,
  middle: {
    first: {
      medal: true,
      prize: 250000,
    },
    second: {
      medal: true,
      prize: 250000,
    },
    third: {
      medal: true,
      prize: 100000,
    },
  },
  general: {
    first: {
      medal: false,
      prize: 500000,
    },
    second: {
      medal: false,
      prize: 300000,
    },
    third: {
      medal: false,
      prize: 200000,
    },
  },
};

// 유틸리티 함수들
export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString("ko-KR");
};

export const formatPrizeDisplay = (prizeInfo: PrizeInfo): string => {
  if (prizeInfo.medal) {
    return `키링 및 상금\n(${formatCurrency(prizeInfo.prize)}원)`;
  }
  return `${formatCurrency(prizeInfo.prize)}원`;
};

export const getPrizeTableData = (category: PrizeCategory) => [
  {
    rank: "1등",
    certificate: "선린인터넷고등학교장",
    prize: formatPrizeDisplay(category.first),
  },
  {
    rank: "2등",
    certificate: "선린인터넷고등학교장",
    prize: formatPrizeDisplay(category.second),
  },
  {
    rank: "3등",
    certificate: "선린인터넷고등학교장",
    prize: formatPrizeDisplay(category.third),
  },
];
