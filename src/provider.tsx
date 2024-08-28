'use client'
import { Provider } from "react-redux";
import { store } from "./store";
import React, { ReactNode } from 'react';

interface prov {
  children: ReactNode;
}

const Provides: React.FC<prov> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default Provides;
