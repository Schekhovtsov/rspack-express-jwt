import { FC } from 'react';

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
}) => {
  return <input value={value} onChange={onChange} placeholder={placeholder} />;
};
