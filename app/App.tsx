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
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Platform,
  Alert,
  Modal,
} from 'react-native';
import * as api from './api';

import {Announcement, Status} from './types';
import Card from './components/Card';

const App: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Status<Announcement[]>>({
    status: 'loading',
  });

  const [modalVisible, setModalVisible] = useState<boolean>(false);

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

  return (
    <>
      <SafeAreaView>
        {announcements.status === 'error' && <Text>Network error!</Text>}
        {announcements.status === 'loading' && <ActivityIndicator />}
        {announcements.status === 'success' && (
          <FlatList
            data={announcements.data}
            renderItem={({item}) => (
              <Card
                headline={item.headline}
                description={item.description}
                price={item.price}
              />
            )}
            keyExtractor={item => item.headline}
          />
        )}
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Add announcements!</Text>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View
          style={{
            padding: 5,
            position: 'absolute',
            right: 16,
            bottom: Platform.OS === 'ios' ? 0 : 16,
            width: 64,
            height: 64,
            borderRadius: 64 / 2,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            hitSlop={{top: 44, bottom: 44, left: 44, right: 44}}>
            <Text
              style={{
                color: 'white',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
