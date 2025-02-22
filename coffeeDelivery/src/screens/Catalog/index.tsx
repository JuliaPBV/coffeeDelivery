import {
  Container,
  Header,
  Greeting,
  GreetingText,
  CartButton,
  CartIcon,
  Title,
  TopBackground,
  BottomBackground,
} from "./styles";
import React, { useRef } from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { StyledImage } from "./styles";
import localizador from "@assets/Vector.png";
import cartIcon from "@assets/State=Empty.png";
import { Banner } from "@src/components/Banner";
import { FlatList, View } from "react-native";
import { Box } from "@src/components/Box";
import { ScrollView } from "react-native-gesture-handler";
import { CategoryList } from "@src/components/CategoryList";
import { BoxList } from "@src/components/BoxList";

export function Catalog() {
  const coffeeData = [
    {
      image: require("@assets/Type=Latte.png"),
      category: "Tradicionais",
      title: "Latte",
      description: "Café expresso com o dobro de leite e espuma cremosa",
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
      image: require("@assets/Type=Cubano.png"),
      category: "Especiais",
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "R$ 9,90",
    },

    {
      image: require("@assets/Type=Expresso.png"),
      category: "Tradicionais",
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
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
      image: require("@assets/Type=Chocolate Quente.png"),
      category: "Doces",
      title: "Chocolete Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
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

  return (
    <ThemeProvider theme={theme}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          <TopBackground />
          <Header>
            <Greeting>
              <StyledImage source={localizador} resizeMode="contain" />
              <GreetingText>Osasco-SP</GreetingText>
            </Greeting>
            <CartButton>
              <CartIcon source={cartIcon} />
            </CartButton>
          </Header>
          <Banner />

          <BottomBackground>
            <View style={{ alignItems: "center", paddingBottom: 20 }}>
              <View style={{ width: "100%", height: 300 }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  nestedScrollEnabled={true}
                  snapToAlignment="start"
                  decelerationRate="fast"
                  contentContainerStyle={{
                    paddingHorizontal: 16,
                    gap: 16,
                  }}
                  data={coffeeData.slice(0, 3)}
                  renderItem={({ item }) => (
                    <Box
                      image={item.image}
                      category={item.category}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>

              <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
                <Title>Nossos cafés</Title>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <CategoryList categories={categories} />
                </View>
              </View>

              {categories.map((category, index) => (
                <BoxList
                  key={`category-${index}`}
                  title={category as string}
                  data={
                    coffeeData.filter((item) => item.category === category) ??
                    []
                  }
                />
              ))}
            </View>
          </BottomBackground>
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}
