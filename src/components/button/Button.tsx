import { S } from "./Button_Style";

type ButtonPropsType = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({ onClick, disabled, children }: ButtonPropsType) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};
