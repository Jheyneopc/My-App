import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Jheyne’s Recipe Diary</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/screens/HealthyScreen')}
        >
          <Text style={styles.buttonText}>Healthy Food</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/screens/SaladsScreen')}
        >
          <Text style={styles.buttonText}>Salads</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/screens/SmoothiesScreen')}
        >
          <Text style={styles.buttonText}>Smoothies</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/screens/SweetsScreen')}
        >
          <Text style={styles.buttonText}>Sweets</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5e8dc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a9746e',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#eec6c6',
    padding: 15,
    marginVertical: 8,
    width: '80%',
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#a9746e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
