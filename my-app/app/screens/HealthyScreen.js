import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HealthyScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Healthy Recipes 🥗</Text>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Grilled Chicken Bowl</Text>
        <Text style={styles.recipeText}>
          Ingredients: grilled chicken, brown rice, avocado, spinach, cherry tomatoes...
        </Text>
        <Text style={styles.recipeText}>
          Combine everything in a bowl. Drizzle with olive oil and lemon juice.
        </Text>
      </View>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Quinoa Veggie Salad</Text>
        <Text style={styles.recipeText}>
          Ingredients: quinoa, cucumbers, red bell pepper, parsley, lemon, olive oil...
        </Text>
        <Text style={styles.recipeText}>
          Cook quinoa, mix with chopped veggies and dressing. Chill and serve!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5e8dc',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: '#a9746e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a9746e',
    textAlign: 'center',
    marginBottom: 20,
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a9746e',
    marginBottom: 5,
  },
  recipeText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});
