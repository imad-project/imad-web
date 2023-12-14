import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { ChangeEvent, useCallback, useState, useEffect } from "react";

const age = [
  { value: 1, name: "10~19" },
  { value: 2, name: "20~29" },
  { value: 3, name: "30~39" },
  { value: 4, name: "40~49" },
  { value: 5, name: "50~59" },
];

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

export default function SetUserData_container() {
  const [nickName, setNickName] = useState("");
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [userAge, setUserAge] = useState(Number);

  // 닉네임 변경부
  const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  // 나이 변경부
  const onChangeAge = (e) => {
    setUserAge(e.target.value);
    console.log(e.target.value);
    return;
  };

  const checkedItemHandler = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  };

  const onSubmit = () => {};

  const years = [];
  const year = new Date().getFullYear();

  for (var y = 1900; y <= year; y++) {
    years.push(y);
  }

  const PATCHUSER = async () => {
    await axios.patch("https://ncookie.site/api/user", {
      headers: {
        Authorization: `Bearer ${getCookie("Authorization")}`,
      },
    });
  };

  return (
    <>
      <h1>회원정보 수정</h1>
      <div>
        <span>닉네임:</span>
        <input type="text" onChange={onChangeNickName} />
      </div>

      <div>
        <span>출생년도:</span>
        <select id="year" onChange={onChangeAge}>
          {years.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>
      </div>

      <div>
        <h1>좋아하는 영화장르</h1>
        {movie_genres?.map((el) => (
          <div key={el.id}>
            <input
              type="checkbox"
              id={el.name}
              onChange={(e) => checkHandler(e, el.id)}
            />
            <span>{el.name}</span>
          </div>
        ))}

        <button onClick={onSubmit}>submit</button>
      </div>
    </>
  );
}
