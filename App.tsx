import { SignIn } from "./src/screens/SignIn";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsloaded ? <SignIn /> : <Loading/>}
    </NativeBaseProvider>
  );
}