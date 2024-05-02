import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { supabase } from '../../service/supabase';
import { useUser } from '../../auth/UserContext';


const CadastroLote = () => {
  const { user } = useUser();
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [peso_total_compra, setPeso] = useState('');
  const [valor_pago, setValor] = useState('');
  const [data, setData] = useState('');
  const navigation = useNavigation();

 

  const handlePressSalvar = async () => {
    try {
      const formattedDate = `${data.substr(6, 4)}-${data.substr(3, 2)}-${data.substr(0, 2)}`;
  
      const { error } = await supabase
      .from('lotes')
      .insert([
        { 
          id_usuario: user.id,
          descricao, 
          quantidade, 
          peso_total_compra, 
          valor_pago, 
          data: formattedDate,
          peso_total_vendido: 0, 
          valor_vendido: 0, 
          saldo_final: 0, 
          data_vendido: null
        }
      ]);
  
      if (error) {
        console.error('Erro ao adicionar lote: ', error.message);
      } else {
        console.log('Lote adicionado');
        setDescricao('');
        setQuantidade('');
        setPeso('');
        setValor('');
        setData('');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Erro ao adicionar lote: ', error);
    }
  };

  return (
    <View style={Style.container}>
      <TextInput style={Style.txtInput} placeholder='Descrição' value={descricao} onChangeText={setDescricao} />
      <TextInput style={Style.txtInput} placeholder='Quantidade' keyboardType='numeric' value={quantidade} onChangeText={setQuantidade} />
      <TextInput style={Style.txtInput} placeholder='Peso total na compra' keyboardType='numeric' value={peso_total_compra} onChangeText={setPeso} />
      <TextInput style={Style.txtInput} placeholder='Valor pago' keyboardType='numeric' value={valor_pago} onChangeText={setValor} />
      <TextInput style={Style.txtInput} placeholder='DD/MM/AA' keyboardType='numeric' value={data} onChangeText={setData}/>
      {/*<TextInput style={Style.txtInput} placeholder='DD/MM/AA (vendido)' />
      <TextInput style={Style.txtInput} placeholder='Valor vendido' />*/}
      <View style={Style.containerBtn}>
        <TouchableOpacity style={Style.button} onPress={handlePressSalvar} >
          <Text style={Style.text}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CadastroLote;