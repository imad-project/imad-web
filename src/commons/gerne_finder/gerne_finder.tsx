const movie_genres = [
  {
    id: 28,
    name: "액션",
  },
  {
    id: 12,
    name: "모험",
  },
  {
    id: 16,
    name: "애니메이션",
  },
  {
    id: 35,
    name: "코미디",
  },
  {
    id: 80,
    name: "범죄",
  },
  {
    id: 99,
    name: "다큐멘터리",
  },
  {
    id: 18,
    name: "드라마",
  },
  {
    id: 10751,
    name: "가족",
  },
  {
    id: 14,
    name: "판타지",
  },
  {
    id: 36,
    name: "역사",
  },
  {
    id: 27,
    name: "공포",
  },
  {
    id: 10402,
    name: "음악",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10749,
    name: "로맨스",
  },
  {
    id: 878,
    name: "SF",
  },
  {
    id: 10770,
    name: "TV 영화",
  },
  {
    id: 53,
    name: "스릴러",
  },
  {
    id: 10752,
    name: "전쟁",
  },
  {
    id: 37,
    name: "서부",
  },
];

const tv_genres = [
  {
    id: 10759,
    name: "액션/어드벤쳐",
  },
  {
    id: 16,
    name: "애니메이션",
  },
  {
    id: 35,
    name: "코미디",
  },
  {
    id: 80,
    name: "범죄",
  },
  {
    id: 99,
    name: "다큐멘터리",
  },
  {
    id: 18,
    name: "드라마",
  },
  {
    id: 10751,
    name: "가족",
  },
  {
    id: 10762,
    name: "아동",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10763,
    name: "뉴스",
  },
  {
    id: 10764,
    name: "리얼리티",
  },
  {
    id: 10765,
    name: "SF/판타지",
  },
  {
    id: 10766,
    name: "소프 오페라",
  },
  {
    id: 10767,
    name: "토크",
  },
  {
    id: 10768,
    name: "전쟁/정치",
  },
  {
    id: 37,
    name: "서부",
  },
];

// 장르 이름 찾는 함수
export const findGenreNames = (type: string, ids: number[]): string[] => {
  let genres;

  // 타입에 따라 알맞은 장르 배열 선택
  if (type === "tv") {
    genres = tv_genres;
  } else if (type === "movie") {
    genres = movie_genres;
  } else {
    return []; // 혹시 type이 잘못 들어오면 빈 배열 반환
  }

  // 해당 ids에 맞는 장르 이름 필터링 및 반환
  return genres
    .filter((genre) => ids.includes(genre.id))
    .map((genre) => genre.name);
};
