import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import logo from "../../assets/images/logoBao.png";
import styles from './styles';


const Header = () => {

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
    </View>
  );
};
export default Header;