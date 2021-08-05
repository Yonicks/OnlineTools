import './app-header.scss';

/* eslint-disable-next-line */
export interface AppHeaderProps {
  title: string;
}

export function AppHeader(props: AppHeaderProps) {
  const { title = 'Welcome to AppHeader!' } = props;
  return (
    <div className={'appHeaderArea'}>
      <h1>{title}</h1>
    </div>
  );
}

export default AppHeader;
