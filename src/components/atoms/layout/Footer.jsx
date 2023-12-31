import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2023 company.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
