import styled from "styled-components";

const Copyright = styled.footer`
  text-align: center;
  color: palevioletred;
`;

function Footer() {
    return (
        <footer>
            <small>
                <Copyright>
                    &copy; Copyright 2021
                </Copyright>
            </small>
        </footer>
    );
}

export default Footer;