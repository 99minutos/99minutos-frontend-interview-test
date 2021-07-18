import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {LauncheType} from "../types/app/Launche";
import {SETlAUNCH} from "../../store/launch/launch.types";

export function useLaunch() {
  const dispatch = useDispatch()
  const launch = useSelector((state: RootState) => state.launch)

  const setLaunch = (payload: LauncheType) => {
    const action = {
      type: SETlAUNCH,
      payload,
    }
    dispatch(action)
  }
  return {
    launch,
    setLaunch
  }
}
