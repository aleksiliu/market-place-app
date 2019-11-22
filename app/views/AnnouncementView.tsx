import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {
  NavigationStackProp,
  NavigationStackOptions,
} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp<{announcementId: string; headline: string}>;
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
          Announcement id: {navigation.getParam('announcementId')}
        </Text>
      </View>
    </>
  );
};

AnnouncementView.navigationOptions = ({
  navigation,
}: any): NavigationStackOptions => {
  return {
    title: navigation.getParam('headline'),
  };
};

export default AnnouncementView;
