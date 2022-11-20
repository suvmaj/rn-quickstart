import {COMMON_ACTION_TYPES} from '@constants/commonActionTypes.constants';

const getActions = ({dispatch}) => {
  return {
    setSettings: payload =>
      dispatch({
        type: COMMON_ACTION_TYPES.SET_STATE,
        payload,
      }),
    resetSettings: () =>
      dispatch({
        type: COMMON_ACTION_TYPES.RESET_STATE,
      }),
  };
};

export default getActions;
