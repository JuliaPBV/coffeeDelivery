import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Catalog } from "@src/screens/Catalog";
import { Product } from "@src/screens/Product";
import { RootStackParamList } from "@src/@types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Catalog" component={Catalog} />
      <Screen name="Product" component={Product} />
    </Navigator>
  );
}
