import React, { ChangeEvent, useEffect, useState } from "react";
import { Wrapper } from "../Wrapper";
import { Button } from "../button/Button";
import { S } from "./Settings_styles";
import { SettingsValue } from "./SettingsValue";
import { myTheme } from "../../styles/Theme.styled";

type SettingsPropsType = {
  maxValue: number;
  minValue: number;
  setMaxValue: (value: number) => void;
  setMinValue: (value: number) => void;
  warning: boolean;
  setButtonHandler: () => void;
};

export const Settings = (props: SettingsPropsType) => {


  const handleMinValueChange = (value: number) => {
    props.setMinValue(value);
  };

  const handleMaxValueChange = (value: number) => {
    props.setMaxValue(value);
  };

  return (
    <div>
      <S.Settings>
        <S.SettingsField>
          <S.SettingsBox color={props.warning ? `${myTheme.colors.dark}` : ""}>
            <SettingsValue
              title="max value"
              //value={props.maxValue}
              //onChange={handleMaxValueChange}
            />
            <SettingsValue
              title="start value"
              //value={props.minValue}
              //onChange={handleMinValueChange}
            />
          </S.SettingsBox>
        </S.SettingsField>
        <Wrapper>
          <Button onClick={props.setButtonHandler} disabled={props.warning}>
            set
          </Button>
        </Wrapper>
      </S.Settings>
    </div>
  );
};
