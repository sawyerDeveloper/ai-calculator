import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{
          title: 'AI Calculator',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 30 },
        }}
        name='index'
      ></Stack.Screen>
    </Stack>
  );
}
