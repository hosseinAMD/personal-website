import { FunctionComponent, ReactNode } from 'react';

export interface AppContainerProps {
  children: ReactNode;
}

const AppContaienr: FunctionComponent<AppContainerProps> = ({ children }) => (
  <div className="container mx-auto py-4 px-2">{children}</div>
);

export default AppContaienr;
