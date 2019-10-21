/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import * as api from './api';

import {Announcement, Status} from './types';

const App: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Status<Announcement[]>>({
    status: 'loading',
  });

  useEffect(() => {
    api
      .getAnnouncements()
      .then(response => {
        setAnnouncements({status: 'success', data: response});
      })
      .catch(error => {
        setAnnouncements({status: 'error', error});
        console.log(error);
      });
  }, []);

  const Item = ({headline, description, price}: Announcement) => (
    <View style={styles.item}>
      <Text style={styles.title}>{headline}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );

  return (
    <>
      <SafeAreaView>
        {announcements.status === 'error' && <Text>Network error!</Text>}
        {announcements.status === 'loading' && <ActivityIndicator />}
        {announcements.status === 'success' && (
          <FlatList
            data={announcements.data}
            renderItem={({item}) => (
              <Item
                headline={item.headline}
                description={item.description}
                price={item.price}
              />
            )}
            keyExtractor={item => item.headline}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
  },
});
export default App;
