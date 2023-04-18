import React, {useMemo, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {GenresContext} from '../../context/genres';
import {LanguagePanel} from '../../components/LanguagePanel/LanguagePanel';

export const Genres = () => {
  const {genres} = useContext(GenresContext);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = useMemo(
    () => (isDarkMode ? Colors.darker : Colors.lighter),
    [isDarkMode],
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView style={backgroundStyle}>
        <View style={{padding: 24, gap: 12}}>
          <LanguagePanel />
          <Text>Genres</Text>
          <View style={{justifyContent: 'space-between'}}>
            {genres.map(({id, name}) => (
              <View key={id}>
                <Text>{name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
