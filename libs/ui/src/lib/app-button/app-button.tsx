import './app-button.scss';
import { Button } from '@material-ui/core';

/* eslint-disable-next-line */
export interface AppButtonProps {
  text: string;
  onClick: (data: any) => void;
}

export function AppButton(props: AppButtonProps) {
  const { text, onClick } = props;
  return (
    <div className={'AppButtonArea'}>
      <Button variant='contained' color='primary' onClick={onClick}>{text}</Button>
    </div>
  );
}

export default AppButton;
