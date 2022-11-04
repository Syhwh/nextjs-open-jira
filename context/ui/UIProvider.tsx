import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';

export interface UIState {
  sideMenuOpen: boolean;
}

const INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const openSideMenu = () =>
    dispatch({
      type: 'openSideMenu',
    });

  const closeSideMenu = () =>
    dispatch({
      type: 'closeSideMenu',
    });

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};
