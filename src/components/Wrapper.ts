import { styled } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Wrapper = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-evenly;
  align-items: center;
  border: 5px solid ${myTheme.colors.accent};
  border-radius: 10px;
  gap: 20px;
  background-color: ${myTheme.colors.secondary};
  padding: 10px;
`;
