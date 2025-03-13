import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Catalog } from "@src/screens/Catalog";
import { Product } from "@src/screens/Product";
const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="catalog" component={Catalog} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}
