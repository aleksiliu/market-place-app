import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {NavigationInjectedProps, withNavigation} from 'react-navigation';

type OwnProps = {
  headline: string;
  description: string;
  price: number;
  announcementId?: string;
};

const Card = ({
  headline,
  description,
  price,
  navigation,
  announcementId,
}: OwnProps & NavigationInjectedProps) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate('Details', {
        announcementId,
      })
    }>
    <View style={styles.card}>
      <Text style={styles.headlineTitle}>{headline}</Text>
      <Text style={styles.paragraph}>{description}</Text>
      <Text style={styles.price}>{price}€</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3A3C3D',
    padding: 24,
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

export default withNavigation(Card);
