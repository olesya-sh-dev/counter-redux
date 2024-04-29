import React, { ChangeEvent, useState } from "react";
import { S } from "./Settings_styles";
import { myTheme } from "../../styles/Theme.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../redux";
import { setValueAC } from "./settingsValue-reducer";

type SettingsValueProps = {
  title: string;
  //value: number;
  //onChange: (value: number) => void;
};
export const SettingsValue = (props: SettingsValueProps) => {
  const settingsValue = useSelector<AppRootStateType, number>(
    (state) => state.settingsValue
  );
  const dispatch = useDispatch();

  const setNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //   const value = parseInt(event.currentTarget.value);
    // if (value < -1) {
    //   return;
    // }
    //   props.onChange(+event.currentTarget.value);
    dispatch(setValueAC(+event.currentTarget.value));
  };

  return (
    <S.SettingsValueItem>
      <span>{props.title}</span>
      <input
        type="number"
        //value={props.value}
        onChange={setNumberHandler}
        style={{
          background: settingsValue < 0 ? `${myTheme.colors.dark}` : "",
        }}
      />
    </S.SettingsValueItem>
  );
};
