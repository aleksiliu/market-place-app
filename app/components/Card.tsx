import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Announcement} from '../types';

const Card = ({headline, description, price}: Announcement) => (
  <View style={styles.card}>
    <Text style={styles.title}>{headline}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default Card;
