import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';

export default function SweetsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Sweets Recipes 🍰</Text>

      <View style={styles.recipeCard}>
        <Image
          source={require('./chocolate_cookies.jpg')} // ✅ from same folder
          style={styles.recipeImage}
        />
        <Text style={styles.recipeName}>Chocolate Chip Cookies</Text>
        <Text style={styles.recipeText}>
          Ingredients: flour, sugar, butter, chocolate chips, eggs, vanilla...
        </Text>
      </View>

      <View style={styles.recipeCard}>
        <Image
          source={require('./classic_cheesecake.jpg')} // ✅ from same folder
          style={styles.recipeImage}
        />
        <Text style={styles.recipeName}>Classic Cheesecake</Text>
        <Text style={styles.recipeText}>
          Ingredients: cream cheese, sugar, eggs, vanilla, graham crackers...
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
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a9746e',
  },
  recipeText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
