import Layout from "./components/Layout";
import styled from "styled-components";

const DisplayArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
`

const Name = styled.h1`
  text-align: center;
  color: palevioletred;
`

function App() {
  return (
    <DisplayArea>
      <Layout>
        <Name>
          Trent Prynn
        </Name>
      </Layout>
    </DisplayArea>
  );
}

export default App;
