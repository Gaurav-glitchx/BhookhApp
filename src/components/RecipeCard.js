// src/components/RecipeCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const RecipeCard = ({ title, description, imageUrl }) => {
  const validImageUrl = imageUrl && imageUrl.startsWith('http')
    ? imageUrl
    : 'https://via.placeholder.com/150'; // Fallback to placeholder

  return (
    <View style={styles.card}>
      <Image source={{ uri: validImageUrl }} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{description}</Text>
      </View>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.COLORS.backgroundLight,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardInfo: {
    flex: 1,
    padding: 8,
  },
  cardTitle: {
    ...theme.FONTS.body1,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDesc: {
    ...theme.FONTS.body3,
    color: '#666',
  },
});
