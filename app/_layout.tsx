import { Stack } from "expo-router";
import { useFonts } from "expo-font"
export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Medium.ttf'),
  });
  return <Stack />;
}
