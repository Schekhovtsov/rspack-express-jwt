import { FC } from 'react';

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />;
};
