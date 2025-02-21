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
import { Dimensions, View } from "react-native";
import { Box } from "@src/components/Box";
import { ScrollView } from "react-native-gesture-handler";
import { CategoryList } from "@src/components/CategoryList";
import Carousel from "react-native-snap-carousel";

export function Catalog() {
  const coffeeData = [
    {
      image: require("@assets/Type=Latte.png"),
      category: "Tradicional",
      title: "Latte",
      description: "Café expresso com o dobro de leite e espuma cremosa",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Macchiato.png"),
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
  ];

  const categories = [
    {
      data: ["Tradicionais", "Doces", "Especiais"],
    },
  ];

  const carouselRef = useRef(null);
  const { width } = Dimensions.get("window");

  const renderItem = ({ item }) => (
    <Box
      image={item.image}
      category={item.category}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  );

  return (
    <ThemeProvider theme={theme}>
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

        <ScrollView>
          <BottomBackground>
            <View style={{ alignItems: "center" }}>
              <Carousel
                ref={carouselRef}
                data={coffeeData}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={208}
                autoplay={true}
                autoplayInterval={3000}
              />

              <View style={{ paddingHorizontal: 16 }}>
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
            </View>
          </BottomBackground>
        </ScrollView>
      </Container>
    </ThemeProvider>
  );
}
