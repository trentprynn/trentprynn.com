import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
`;

function Header() {
  const { isLoading, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav>
      <Link to="/">
        <Title>Home</Title>
      </Link>
      <Link to="/comments">
        <Title>Comments</Title>
      </Link>
      {isLoading ? (
        <div />
      ) : isAuthenticated ? (
        <Button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </Button>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}
    </nav>
  );
}

export default Header;
