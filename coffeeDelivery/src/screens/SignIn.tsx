import { VStack, Image, Center } from "native-base";
import LogoPng from "../assets/Logo.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="#8047F8" justifyContent="center">
      <Center>
        <Image source={LogoPng} />
      </Center>
    </VStack>
  );
}
