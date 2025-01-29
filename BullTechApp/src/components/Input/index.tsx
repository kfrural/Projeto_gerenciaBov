import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface InputProps {
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const Input = ({ placeholder, value, onChangeText }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          if (onChangeText) onChangeText(text);
        }}
      />
    </View>
  );
};
export default Input;