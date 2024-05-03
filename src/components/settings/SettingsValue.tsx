import React, { ChangeEvent, useState } from "react";
import { S } from "./Settings_styles";
import { myTheme } from "../../styles/Theme.styled";
import { useDispatch, useSelector } from "react-redux";
//import { AppRootStateType } from "../redux";
//import { setValueAC } from "./settingsValue-reducer";

type SettingsValueProps = {
  title: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const SettingsValue = (props: SettingsValueProps) => {
  // const state = useSelector<AppRootStateType, number>(
  //   (state) => state.settingsValue
  // );
  //const dispatch = useDispatch();

  // const setNumberHandler = (value:number) => {
  //  props.onChange(props.value);
  // };

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
