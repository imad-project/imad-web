import { useEffect, useState } from "react";
import MainPageUI from "./main.presenter";
import axios from "axios";

export default function MainContainer(): JSX.Element {
  const [month, setMonth] = useState();

  const monthRanking = async () => {
    try {
      const MonthRES = await axios.get(
        `https://api.iimad.com/api/ranking/monthly?page=1&type=all`,
        {
          headers: {
            Authorization: "GUEST",
          },
        }
      );
      if (MonthRES.status === 200) {
        setMonth(MonthRES.data.data.details_list);

        console.log(month);
      }
    } catch (error) {
      console.error("Error occurred while liking review:", error);
    }
  };

  useEffect(() => {
    monthRanking();
  }, []);
  return <MainPageUI month={month} />;
}
