import { Stack } from "expo-router";
export default function RootLayout() {
  return <Stack>
    <Stack.Screen options={{title:"AI Calculator"}} name="index"></Stack.Screen>
  </Stack>;
}
