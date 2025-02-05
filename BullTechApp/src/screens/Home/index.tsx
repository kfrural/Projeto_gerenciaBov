import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import style from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonCard from "../../components/ButtonCard";

export default function Home() {
  const navigation = useNavigation();

  const handlePress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <>
      <Header />
      <View style={style.container}>
        <ButtonCard
        title="Lotes de animais"
        onPress={() => handlePress("")}
        />
        <ButtonCard
        title="Calendario"
        onPress={() => handlePress("")}
        />
        <ButtonCard
        title="Conversão de peso"
        onPress={() => handlePress("")}
        />
        <ButtonCard
        title="Calculadora de rações"
        onPress={() => handlePress("")}
        />
        <ButtonCard
        title="Controle Financeiro"
        onPress={() => handlePress("")}
        />
      </View>
      <Footer />
    </>
  );
}
