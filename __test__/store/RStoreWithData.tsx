import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import {reducer} from '../../src/store/launch/launch.store';
import {LauncheType} from "../../src/common/types/app/Launche";
const data: LauncheType = {
  id:1,
  "mission_name": "Space",
  "launch_date_local": "2020-10-24T11:31:00-04:00",
  "launch_site": {
    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
  },
  "links": {
    "article_link": null,
    "video_link": "https://www.youtube.com/watch?v=zrOfZzXyNXQ",
    "mission_patch": ""
  },
  "ships": [],
  "details": "test"
}
function rendeWithData(ui: any, {
    preloadedState,
    store = configureStore({ reducer: { launch: reducer }, preloadedState: {launch: data} }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { rendeWithData }
