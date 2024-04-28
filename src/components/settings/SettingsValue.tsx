import React, { ChangeEvent, useState } from "react";
import { S } from "./Settings_styles";
import { myTheme } from "../../styles/Theme.styled";

type SettingsValueProps = {
  title: string;
  value: number;
  onChange: (value: number) => void;
};
export const SettingsValue = (props: SettingsValueProps) => {
  const setNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.currentTarget.value);
  if (value < -1) {
    return;
  }
    props.onChange(+event.currentTarget.value);
   
  };

  return (
    <S.SettingsValueItem>
      <span>{props.title}</span>
      <input
        type="number"
        value={props.value}
        onChange={setNumberHandler}
        style={{ background: props.value < 0 ? `${myTheme.colors.dark}` : "" }}
        
      />
    </S.SettingsValueItem>
  );
};
