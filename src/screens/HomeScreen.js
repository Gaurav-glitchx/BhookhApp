// src/screens/HomeScreen.js
import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipes } from '../controllers/recipeController';
import theme from '../styles/theme';

const HomeScreen = ({ route }) => {
  const { userName = 'Guest' } = route.params || {};

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const loadRecipes = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg('');
      const data = await fetchRecipes();
      console.log('Fetched Recipes:', data); // Debug fetched recipes
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setErrorMsg('Failed to load recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  const renderRecipeItem = ({ item }) => {
    console.log('Rendering Recipe Item:', item); // Debug individual recipe
    const imageUrl = item.image || 'https://via.placeholder.com/150';
    return (
      <RecipeCard
        title={item.name}
        description={item.ingredients?.join(', ')} // Displaying ingredients as description
        imageUrl={imageUrl}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {userName}!</Text>

      {loading && (
        <ActivityIndicator size="large" color={theme.COLORS.primary} />
      )}

      {errorMsg ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMsg}</Text>
          <CustomButton title="Try Again" onPress={loadRecipes} />
        </View>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()} // Ensure unique IDs
          renderItem={renderRecipeItem}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}

      <View style={styles.refreshContainer}>
        <CustomButton title="Refresh" onPress={loadRecipes} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.background,
    padding: 16,
  },
  greeting: {
    ...theme.FONTS.heading2,
    marginBottom: 12,
  },
  errorContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    ...theme.FONTS.body2, // This line depends on 'body2' being defined
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
  refreshContainer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
});
