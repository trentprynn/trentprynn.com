import Layout from "./components/Layout";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import config from "./auth0-config.json";

const Name = styled.h1`
  color: palevioletred;
  text-align: center;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  display: block;
  padding: 0.25em;
`

function App() {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } = useAuth0();

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
        {isAuthenticated && 
        <Button onClick={async () => console.log(await getAccessTokenSilently({audience: config.audience}))}>Print JWT to Log</Button>
        }
      </div>
    </Layout>
  );
}

export default App;
