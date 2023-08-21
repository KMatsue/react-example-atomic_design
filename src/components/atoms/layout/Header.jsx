import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USER</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  text-align: center;
  /* position: fixed; */
  padding: 8px 0;
  width: 100%;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
