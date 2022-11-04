import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';

export interface UIState {
  sideMenuOpen: boolean;
}

const INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider: FC<PropsWithChildren<UIState>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);
  return (
    <UIContext.Provider value={{ ...state }}>{children}</UIContext.Provider>
  );
};
