import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';

import {apiKey} from '../constants';
import {GlobalContext} from './global';

export const GenresContext = createContext(null);

const GenresContextProvider = ({children}) => {
  const {locale} = useContext(GlobalContext);
  const [genres, setGenres] = useState([]);

  const sendRequest = useCallback(async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${locale}`,
    );
    const json = await res.json();

    setGenres(json.genres);
  }, [locale]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <GenresContext.Provider value={{genres}}>{children}</GenresContext.Provider>
  );
};

export default GenresContextProvider;
