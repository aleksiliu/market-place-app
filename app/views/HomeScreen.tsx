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
  Modal,
  Image,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as api from '../api';

import {Announcement, Status} from '../types';
import Card from '../components/Card';

import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {NavigationStackOptions} from 'react-navigation-stack';

const HomeScreen: NavigationStackScreenComponent = () => {
  const [announcements, setAnnouncements] = useState<Status<Announcement[]>>({
    status: 'loading',
  });

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [form, setForm] = React.useState<Announcement>({
    headline: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    api
      .getAnnouncements()
      .then(response => {
        setAnnouncements({status: 'success', data: response});
      })
      .catch(error => {
        setAnnouncements({status: 'error', error});
      });
  };

  const onSubmit = () => {
    if (form.headline && form.description && form.price) {
      api
        .postAnnouncement(form)
        .then(response => {
          fetchAnnouncements();
          setModalVisible(false);
        })
        .catch(error => {
          Alert.alert(JSON.stringify(error));
        });
    } else {
      Alert.alert('Fill all the details first!');
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#212325',
        }}>
        {announcements.status === 'error' && (
          <Text style={{color: '#FFF', fontSize: 18}}>Network error :(</Text>
        )}
        {announcements.status === 'loading' && <ActivityIndicator />}
      </View>
      {announcements.status === 'success' && (
        <SafeAreaView style={{backgroundColor: '#212325'}}>
          <FlatList
            data={announcements.data}
            renderItem={({item}) => (
              <Card
                headline={item.headline}
                description={item.description}
                price={item.price}
                announcementId={item.announcementId}
              />
            )}
            keyExtractor={(item: any) => item.announcementId}
          />
        </SafeAreaView>
      )}

      <Modal
        onRequestClose={() => console.log('on dismiss')}
        onDismiss={() => console.log('on dismiss')}
        presentationStyle="pageSheet"
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#212325',
          }}>
          <View
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: '#191A1B',
              borderRadius: 64 / 2,
              zIndex: 1,
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.circle}>
              <Image
                source={require('../assets/images/cross.png')}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                style={styles.input}
                placeholder="Add title"
                placeholderTextColor="#939597"
                onChangeText={text => setForm({...form, headline: text})}
                value={form.headline}
              />
              <TextInput
                style={styles.input}
                placeholder="Add description"
                placeholderTextColor="#939597"
                onChangeText={text => setForm({...form, description: text})}
                value={form.description}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Price"
                onChangeText={text => setForm({...form, price: Number(text)})}
                value={form.price.toString()}
              />
              <Button
                title="Add announcement"
                color="#96CEA7"
                onPress={onSubmit}></Button>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>

      <View
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
          backgroundColor: '#96CEA7',
          borderRadius: 64 / 2,
          zIndex: 1,
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.circle}>
          <Image source={require('../assets/images/cross.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 340,
    color: 'white',
    paddingHorizontal: 16,
    backgroundColor: '#3A3C3D',
    marginBottom: 16,
  },
  circle: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

HomeScreen.navigationOptions = (): NavigationStackOptions => {
  return {
    title: 'Announcements',
  };
};

export default HomeScreen;
