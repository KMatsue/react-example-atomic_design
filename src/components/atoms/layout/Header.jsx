import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <a to="/">HOME</a>
      <a to="/users">USER</a>
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
