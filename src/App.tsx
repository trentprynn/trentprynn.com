import Layout from "./components/Layout";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Name = styled.h1`
  color: palevioletred;
  text-align: center;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: auto;
  display: block;
  padding: 0.25em;
`

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Layout>
      <div>
        <Name>
          Trent Prynn
        </Name>
        {isAuthenticated ? (
          <Button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
        ) :
        (
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        )}
      </div>
    </Layout>
  );
}

export default App;
