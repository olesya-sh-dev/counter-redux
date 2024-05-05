import { ChangeEvent } from "react";
import { S } from "./Settings_styles";
import { myTheme } from "../../styles/Theme.styled";

type SettingsValueProps = {
  title: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const SettingsValue = (props: SettingsValueProps) => {
  return (
    <S.SettingsValueItem>
      <span>{props.title}</span>
      <input
        type="number"
        value={props.value}
        onChange={props.onChange}
        style={{
          background: props.value < 0 ? `${myTheme.colors.dark}` : "",
        }}
      />
    </S.SettingsValueItem>
  );
};
