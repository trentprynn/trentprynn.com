import styled from "styled-components";

const HomeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Home() {
  return (
    <HomeArea>
      <Title>Hello</Title>
    </HomeArea>
  );
}

export default Home;
