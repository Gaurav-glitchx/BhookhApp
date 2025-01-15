import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeCard = ({ name, ingredients, image }) => {
  const imageUrl =
    typeof image === 'string' && image.startsWith('http')
      ? image
      : 'https://via.placeholder.com/150';

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{ingredients.join(', ')}</Text>
      </View>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
