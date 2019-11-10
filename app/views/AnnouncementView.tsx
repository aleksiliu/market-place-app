import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {NavigationStackProp} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp<{announcementId: string}>;
};

const AnnouncementView = ({navigation}: Props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#212325',
        }}>
        <Text style={{color: 'white'}}>
          Announcement id: {navigation.getParam('announcementId', 'NO-ID')}
        </Text>
      </View>
    </>
  );
};

AnnouncementView.navigationOptions = () => {
  return {
    title: 'Announcement',
  };
};

export default AnnouncementView;
