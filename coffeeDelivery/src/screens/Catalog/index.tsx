import React, { useState } from "react";
import localizador from "@assets/Vector.png";
import cartIcon from "@assets/State=Empty.png";
import { Banner } from "@src/components/Banner";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { Box } from "@src/components/Box";
import { ScrollView } from "react-native-gesture-handler";
import { CategoryList } from "@src/components/CategoryList";
import { BoxList } from "@src/components/BoxList";

interface Coffee {
  image: any;
  category: string;
  title: string;
  description: string;
  price: string;
}

export function Catalog() {
  const coffeeData = [
    {
      image: require("@assets/Type=Expresso.png"),
      category: "Tradicionais",
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água\n quente e grãos moídos",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Americano.png"),
      category: "Tradicionais",
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Expresso Cremoso.png"),
      category: "Tradicionais",
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Latte.png"),
      category: "Tradicionais",
      title: "Latte",
      description: "Café expresso com o dobro de leite e espuma cremosa",
      price: "R$ 9,90",
    },

    {
      image: require("@assets/Type=Café Gelado.png"),
      category: "Tradicionais",
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Capuccino.png"),
      category: "Doces",
      title: "Capuccino",
      description: "Bebida com canela feita de doses de café, leite e espuma",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Mochaccino.png"),
      category: "Doces",
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: "R$ 9,90",
    },

    {
      image: require("@assets/Type=Chocolate Quente.png"),
      category: "Doces",
      title: "Chocolete Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Cubano.png"),
      category: "Especiais",
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "R$ 9,90",
    },

    {
      image: require("@assets/Type=Havaiano.png"),
      category: "Especiais",
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Árabe.png"),
      category: "Especiais",
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Árabe.png"),
      category: "Especiais",
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "R$ 9,90",
    },
  ];

  const categories = ["Tradicionais", "Doces", "Especiais"];
  const [filteredCoffeeData, setFilteredCoffeeData] =
    useState<Coffee[]>(coffeeData);

  const handleSearch = (filteredData: Coffee[]) => {
    setFilteredCoffeeData(filteredData);
  };

  return (
    <ScrollView
      horizontal
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-1 relative">
        <View className=" absolute top-0 left-0 w-full h-1/2 bg-custom_gray_100" />
        <View className="absolute bottom-0 left-0 w-full h-1/2 bg-custom_gray_900" />

        <View className=" bg-custom_gray_100 w-full flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Image
              className="w-5 h-5 margin m-3"
              source={localizador}
              resizeMode="contain"
            />
            <Text className="font-custom_roboto_regular text-sm text-custom_gray_900 pt-1">
              Osasco-SP
            </Text>
          </View>
          <TouchableOpacity className="p-2">
            <Image className="w-8 h-8 mr-[15px] pr-4" source={cartIcon} />
          </TouchableOpacity>
        </View>

        <Banner coffeeData={coffeeData} onSearch={handleSearch} />

        <FlatList
          data={coffeeData.filter((_, index) => [3, 6, 8].includes(index))}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 32, gap: 16 }}
          renderItem={({ item }) => (
            <Box
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          )}
        />

        <View className="px-4 mt-12">
          <Text className="text-custom_gray_300 font-custom_baloo2_bold text-base pb-4">
            Nossos cafés
          </Text>

          <CategoryList categories={categories} />
        </View>

        {categories.map((category, index) => (
          <BoxList
            key={`category-${index}`}
            title={category}
            data={filteredCoffeeData.filter(
              (item) => item.category === category
            )}
          />
        ))}
      </View>
    </ScrollView>
  );
}
