

import React from 'react'
import { store } from './Store'
import { Provider } from 'react-redux'
import { AppRedux } from './AppRedux'

store.subscribe(() => console.log(store.getState()) )

export function IndexRedux() {
  return (
    <>
      <Provider store = {store}>
        <AppRedux />
      </Provider>
    </>
  )
}


