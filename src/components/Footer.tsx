import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1em;
`;

const Copyright = styled.footer`
  text-align: center;
  color: palevioletred;
`;

function Footer() {
  return (
    <FooterContainer>
      <small>
        <Copyright>&copy; Copyright 2021</Copyright>
      </small>
    </FooterContainer>
  );
}

export default Footer;
