import {AnyAction} from 'redux';
import * as actionTypes from './launch.types';
import {HYDRATE} from 'next-redux-wrapper';
import {LauncheType} from "../../common/types/app/Launche";

const data: LauncheType = {
  id:0,
  "mission_name": "",
  "launch_date_local": "",
  "launch_site": {
    "site_name_long": ""
  },
  "links": {
    "article_link": null,
    "video_link": "",
    "mission_patch": ""
  },
  "ships": [],
  "details": null
}
export const reducer = (
  state = data,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload.session, // apply delta from hydration
    };
    return nextState;
  }

  switch (action.type) {
    case actionTypes.SETlAUNCH:
      return {
        state,
        ...action.payload
      };
    default:
      return state;
  }
};
