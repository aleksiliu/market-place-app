import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Announcement} from '../types';

const Card = ({headline, description, price}: Announcement) => (
  <View style={styles.card}>
    <Text style={styles.title}>{headline}</Text>
    <Text style={{color: 'white', opacity: 0.7}}>{description}</Text>
    <Text style={{color: 'white'}}>{price}€</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3A3C3D',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});

export default Card;
