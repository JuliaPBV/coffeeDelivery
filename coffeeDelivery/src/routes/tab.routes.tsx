import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Catalog } from "@src/screens/Catalog";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8047F8",
        tabBarInactiveTintColor: "#8D8686",
        tabBarStyle: { backgroundColor: "#FAFAFA", height: 60 },
      }}
    >
      <Tab.Screen
        name="Catálogo"
        component={Catalog}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cafe-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        //component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
