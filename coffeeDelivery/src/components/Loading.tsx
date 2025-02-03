import { Spinner, Center } from "native-base";
export function Loading() {
  return (
    <Center flex={1} bg="#4B2995">
      <Spinner color="#8047F8" />
    </Center>
  );
}
