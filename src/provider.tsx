
'use client'
import { Provider } from "react-redux";
import { store } from "./store";
import React from 'react'

const Provides = ({children}) => {
  return (
    <Provider store = {store}>
        {children}
    </Provider>

  )
}

export default Provides