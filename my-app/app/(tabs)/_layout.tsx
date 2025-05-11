import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animation: 'slide_from_right', // You can also try 'fade' or 'slide_from_bottom'
        headerShown: false, // Optional: hides the default top bar
      }}
    />
  );
}
