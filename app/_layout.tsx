import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="auth/index" options={{ headerShown: false }} />
          <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
          <Stack.Screen name="auth/terms" options={{ headerShown: false }} />
          <Stack.Screen name="auth/privacy" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          
          {/* Screens */}
          <Stack.Screen name="screens/1WelcomeScreen" options={{ headerShown: false }} />
          <Stack.Screen name="screens/2.1Term&Condition" options={{ headerShown: false }} />
          <Stack.Screen name="screens/2.2PrivatePolicy" options={{ headerShown: false }} />
          <Stack.Screen name="screens/appliedLeave" options={{ headerShown: false }} />
          
          {/* Tabs Screens */}
          <Stack.Screen name="(tabs)/dashboard" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)/profile" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
