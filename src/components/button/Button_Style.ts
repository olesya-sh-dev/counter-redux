import { styled } from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const Button = styled.button`
  background-color: ${myTheme.colors.button};
  border: 5px solid ${myTheme.colors.accent};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  display: flex;

  border-radius: 10px;
  color: ${myTheme.colors.accent};

  &:disabled {
    opacity: 0.4;
  }
`;
export const S = {
  Button,
};
