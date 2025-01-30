import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface InputPasswordProps {
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const InputPassword = ({ placeholder, value, onChangeText }: InputPasswordProps) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  function handleOnPress() {
    setVisible(!visible);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          if (onChangeText) onChangeText(text);
        }}
        secureTextEntry={!visible}
      />
      {/* <Ionicons
        
        size={20}
        style={styles.iconPassword}
        name={visible ? 'eye-outline' : 'eye-off-outline'}
      /> */}
    </View>
  );
};

export default InputPassword;