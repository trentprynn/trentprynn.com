import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Header() {
    return (
        <Title>
            Hello
        </Title>
    );
}

export default Header;