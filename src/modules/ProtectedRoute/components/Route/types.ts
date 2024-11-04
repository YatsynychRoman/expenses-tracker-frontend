export interface IProps {
  path: string;
  exact?: boolean;
  forLogged?: boolean;
  children: React.ReactElement;
  fallback?: React.ReactElement | (() => void);
  location?: object;
}
