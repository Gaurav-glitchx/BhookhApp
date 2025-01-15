import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecipeDetailsScreen = ({ route }) => {
  const { recipe } = route.params; // Get the selected recipe details
  const navigation = useNavigation(); // Access navigation object

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Recipe Image */}
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.subtitle}>Cuisine: {recipe.cuisine}</Text>
      <Text style={styles.subtitle}>Difficulty: {recipe.difficulty}</Text>
      <Text style={styles.subtitle}>Prep Time: {recipe.prepTimeMinutes} mins</Text>
      <Text style={styles.subtitle}>Cook Time: {recipe.cookTimeMinutes} mins</Text>

      {/* Ingredients */}
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.listItem}>- {ingredient}</Text>
      ))}

      {/* Instructions */}
      <Text style={styles.sectionTitle}>Instructions</Text>
      {recipe.instructions.map((instruction, index) => (
        <Text key={index} style={styles.listItem}>{index + 1}. {instruction}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 16,
    color: '#FF640D',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#2F2E41',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    color: '#2F2E41',
    marginBottom: 4,
  },
});

export default RecipeDetailsScreen;
