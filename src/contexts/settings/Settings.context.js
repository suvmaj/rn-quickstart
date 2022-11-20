import React, {createContext, useContext, useMemo, useReducer} from 'react';

import getActions from './settings.actions';
import reducer, {INITIAL_STATE} from './settings.reducer';

const SettingsContext = createContext();
const {Provider, Consumer: SettingsConsumer} = SettingsContext;

const SettingsProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = useMemo(
    () => [state, getActions({dispatch})],
    [state, dispatch],
  );

  return <Provider value={value}>{children}</Provider>;
};

const useSettings = () => useContext(SettingsContext);

const withSettingsProvider = Component => props =>
  (
    <SettingsProvider>
      <Component {...props} />
    </SettingsProvider>
  );

export {SettingsProvider, SettingsConsumer, useSettings, withSettingsProvider};
