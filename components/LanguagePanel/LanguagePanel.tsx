import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {GlobalContext} from '../../context/global';
import {languages} from '../../constants';

export const LanguagePanel = () => {
  const {locale, setLocale} = useContext(GlobalContext);

  return (
    <View style={{gap: 12}}>
      <Text>{languages[locale]}</Text>
      <View style={{flexDirection: 'row', gap: 12}}>
        {Object.keys(languages).map(el => (
          <TouchableOpacity
            key={el}
            onPress={() => setLocale(el)}
            style={{
              padding: 8,
              borderRadius: 4,
              backgroundColor: 'oldlace',
              alignSelf: 'flex-start',
            }}>
            <Text>{el.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
