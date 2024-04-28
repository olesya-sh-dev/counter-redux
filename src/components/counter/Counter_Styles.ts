import { styled } from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const Counter = styled.div`
  border: 5px solid ${myTheme.colors.accent};
  background-color: ${myTheme.colors.primary};
  width: 400px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  border-radius: 10px;
  gap: 15px;
  padding: 15px;
`;

const Number = styled.span`
  color: ${(props) => props.color};
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border: 5px solid ${myTheme.colors.accent};
  border-radius: 10px;
  background-color: ${myTheme.colors.secondary};
  font-size: 70px;
  font-weight: 900;
  color: ${(props) => props.color};
  width: 350px;
`;
const Warning = styled.p`
color: ${(props) => props.color};
    font-size: 35px;
  font-weight: 700;
  text-align: center;

`
export const S = {
  Counter,
  Number,
  Warning
};
