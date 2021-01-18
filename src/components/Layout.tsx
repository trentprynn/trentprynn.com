import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const CenterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  height: 100vh;
`

function Layout(props: any) {
  return (
    <CenterContainer>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </CenterContainer>
  );
}

export default Layout;
