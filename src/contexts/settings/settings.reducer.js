import config from '@config';
import {COMMON_ACTION_TYPES} from '@constants/commonActionTypes.constants';

const INITIAL_STATE = {
  locale: config.DEFAULT_LOCALE,
  theme: config.DEFAULT_THEME,
};

const reducer = (state, action) => {
  switch (action.type) {
    case COMMON_ACTION_TYPES.SET_STATE:
      return {...state, ...action.payload};
    case COMMON_ACTION_TYPES.RESET_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
export {INITIAL_STATE};
