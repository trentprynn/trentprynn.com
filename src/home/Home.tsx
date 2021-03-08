import styled from "styled-components";

const HomeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

function Home() {
  return (
    <HomeArea>
      <Title>Trent Prynn</Title>
      <Title>Hello</Title>
    </HomeArea>
  );
}

export default Home;
