import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: any;
    textStyle?: any;
    image?: number; // source da imagem
    imageStyle?: object; // estilos opcionais para a imagem
  }
  
  const ButtonCard: React.FC<ButtonProps> = ({ 
    title, 
    onPress, 
    style, 
    textStyle,
    image,
    imageStyle 
  }) => {
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, style]}
        onPress={onPress}
      >
        {image && (
          <Image
            source={image}
            style={[
              styles.image,
              imageStyle
            ]}
            resizeMode="contain"
          />
        )}
        <Text style={[styles.buttonText, textStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  
  export default ButtonCard;