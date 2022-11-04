import { UIState } from './UIProvider';

type uiActionType = { type: 'openSideMenu' } | { type: 'closeSideMenu' };

export const uiReducer = (state: UIState, action: uiActionType) => {
  switch (action.type) {
    case 'openSideMenu':
      return {
        ...state,
        sideMenuOpen: true,
      };
    case 'closeSideMenu':
      return {
        ...state,
        sideMenuOpen: false,
      };

    default:
      return state;
  }
};
