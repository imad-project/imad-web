import styled from "@emotion/styled";
import NavigationContainer from "./navigation/navigation.container";

const Body = styled.div`
  margin-top: 50px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <NavigationContainer />
      <Body>{props.children}</Body>
    </>
  );
}
