import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import {reducer} from '../../src/store/launch/launch.store';
import {LauncheType} from "../../src/common/types/app/Launche";
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
  "details": "test"
}
function RStoreWithoutData(ui: any, {
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
export { RStoreWithoutData }
