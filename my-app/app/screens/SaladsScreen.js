import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SaladsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Salad Recipes 🥗</Text>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Greek Salad</Text>
        <Text style={styles.recipeText}>
          Ingredients: cucumber, tomato, olives, red onion, feta cheese, olive oil...
        </Text>
        <Text style={styles.recipeText}>
          Chop all ingredients and toss with olive oil and lemon juice.
        </Text>
      </View>

      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Spinach Avocado Salad</Text>
        <Text style={styles.recipeText}>
          Ingredients: spinach, avocado, red onion, cherry tomatoes, lemon juice...
        </Text>
        <Text style={styles.recipeText}>
          Mix spinach with sliced avocado and drizzle lemon juice on top.
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
