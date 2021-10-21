import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  FlatList,
  ListRenderItem,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const Item: ListRenderItem<number> = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          padding: 30,
        }}>
        <Text style={{fontSize: 32}}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        contentContainerStyle={{
          flex: 1,
        }}
        data={[]}
        renderItem={Item}
        keyExtractor={item => item.toString()}
        ListEmptyComponent={
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 36,
                padding: 20,
              }}>
              This was supposed to be a dynamic list
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default App;
