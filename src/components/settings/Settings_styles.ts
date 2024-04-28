import { SettingsValue } from "./SettingsValue";
import { styled } from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const Settings = styled.div`
  border: 5px solid ${myTheme.colors.accent};
  background-color: ${myTheme.colors.primary};
  width: 400px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;
  gap: 15px;
  padding: 10px;
`;

const SettingsField = styled.div`
  color: ${(props) => props.color};
  display: flex;
  padding: 15px;
  border: 5px solid ${myTheme.colors.accent};
  border-radius: 10px;
  background-color: ${myTheme.colors.secondary};

  color: ${(props) => props.color};
  width: 350px;
`;

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 5px solid ${myTheme.colors.accent};
  border-radius: 10px;
  //background-color: ${myTheme.colors.secondary};
  width: 350px;
  background-color: ${(props) => props.color};
`;
const SettingsValueItem = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 30px;
    font-weight: bold;
    color: ${myTheme.colors.primary};
  }
  input {
    font-size: 25px;
    font-weight: bold;
    color: ${myTheme.colors.accent};
    text-align: center;
    width: 120px;
    border: 5px solid ${myTheme.colors.primary};
    background-color: ${myTheme.colors.light};
    border-radius: 10px;
  }
`;
const Error = styled.input`
  ${myTheme.colors.dark}
`;

export const S = {
  Settings,
  SettingsField,
  SettingsBox,
  SettingsValueItem,
};
