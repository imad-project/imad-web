import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NavigationUI from "./navigation.presenter";

export default function NavigationContainer(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
}
