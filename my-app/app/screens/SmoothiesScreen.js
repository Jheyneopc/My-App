import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SmoothiesScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Smoothie Recipes 🍓🥤</Text>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Strawberry Banana Smoothie</Text>
        <Text style={styles.recipeText}>
          Ingredients: strawberries, banana, almond milk, honey, ice...
        </Text>
        <Text style={styles.recipeText}>
          Blend all ingredients until smooth. Serve chilled.
        </Text>
      </View>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Green Detox Smoothie</Text>
        <Text style={styles.recipeText}>
          Ingredients: spinach, green apple, cucumber, lemon, ginger, water...
        </Text>
        <Text style={styles.recipeText}>
          Blend well and enjoy fresh to boost your energy.
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
