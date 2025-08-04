

import React from 'react'
import { store } from './Store'
import { Provider } from 'react-redux'
import { AppRedux } from './AppRedux'

store.subscribe(() => console.log(store.getState()) )

export function IndexReduxToolkit() {
  return (
    <>
      <Provider store = {store}>
        <AppRedux />
      </Provider>
    </>
  )
}


