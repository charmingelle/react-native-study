import React, {createContext, useState} from 'react';

import {languages} from '../constants';

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({children}) => {
  const [locale, setLocale] = useState(Object.keys(languages)[0]);

  return (
    <GlobalContext.Provider value={{locale, setLocale}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
