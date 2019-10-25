import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Announcement} from '../types';

const Card = ({headline, description, price}: Announcement) => (
  <View style={styles.card}>
    <Text style={styles.headlineTitle}>{headline}</Text>
    <Text style={styles.paragraph}>{description}</Text>
    <Text style={styles.price}>{price}€</Text>
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
  headlineTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 18,
    color: 'white',
    opacity: 0.7,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: 'white',
  },
});

export default Card;
