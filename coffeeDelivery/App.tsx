import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { Product } from "@src/screens/Product";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "@hooks/auth";

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <AuthProvider>
        <Product />
      </AuthProvider>
    </ThemeProvider>
  );
}
