import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import AppLoading from 'expo-app-loading';

export default function Index() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5e8dc' }}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Welcome to Jheyne’s Recipe Diary</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/HealthyScreen')}>
        <Text style={styles.buttonText}>🍎 Healthy Food</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/SaladsScreen')}>
        <Text style={styles.buttonText}>🥗 Salads</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/SmoothiesScreen')}>
        <Text style={styles.buttonText}>🍓 Smoothies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/SweetsScreen')}>
        <Text style={styles.buttonText}>🍪 Sweets</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Made with love by Jheyne 💕</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Pacifico_400Regular',
    color: '#a9746e',
    marginBottom: 20,
    textAlign: 'center',
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
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: '#a9746e',
  },
});
