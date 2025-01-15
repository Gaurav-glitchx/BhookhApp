// src/controllers/recipeController.js
export const fetchRecipes = async () => {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json(); // Get the JSON response
    return data.recipes; // Return the recipes array
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
};
