import styled from "@emotion/styled";
import NavigationContainer from "./navigation/navigation.container";

const Body = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
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
