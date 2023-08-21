// import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const onClickAdmin = () => {};

  const onClickGeneral = () => {};

  return (
    <SContainer>
      <h2>トップページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般者</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: conter;
`;
