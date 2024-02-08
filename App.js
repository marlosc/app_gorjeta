import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  const [conta, setConta] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [gorjeta, setGorjeta] = useState('');
  const [total, setTotal] = useState('');

  const calcularGorjeta = () => {
    if (!conta || !porcentagem) {
      Alert.alert('Erro', 'Digite um valor para a gorjeta e/ou para a conta');
      return;
    }

    const valorConta = parseFloat(conta);
    const percent = parseFloat(porcentagem) / 100;
    const valorGorjeta = valorConta * percent;
    const valorTotal = valorConta + valorGorjeta;

    setGorjeta(valorGorjeta.toFixed(2));
    setTotal(valorTotal.toFixed(2));
  };

  const limparCampos = () => {
    setConta('');
    setPorcentagem('');
    setGorjeta('');
    setTotal('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./src/Gorjeta.png')} style={styles.imagem} />

      <Text style={styles.titulo}>Calculadora de Gorjeta</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor da Conta"
        keyboardType="numeric"
        value={conta}
        onChangeText={(text) => setConta(text)}
        placeholderTextColor="#F5FFFA"
        color="#FFFFFF"
      />

      <TextInput
        style={styles.input}
        placeholder="Porcentagem da Gorjeta"
        keyboardType="numeric"
        value={porcentagem}
        onChangeText={(text) => setPorcentagem(text)}
        placeholderTextColor="#F5FFFA"
        color="#FFFFFF"
      />

      <TouchableOpacity style={styles.botao} onPress={calcularGorjeta}>
        <Text style={styles.textoBotao}>Calcular Gorjeta</Text>
      </TouchableOpacity>

      {gorjeta !== '' && total !== '' && (
        <View>
          <Text style={styles.resultado}>Gorjeta: R$ {gorjeta}</Text>
          <Text style={styles.resultado}>Total: R$ {total}</Text>

          <TouchableOpacity style={styles.botao} onPress={limparCampos}>
            <Text style={styles.textoBotao}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B0082',
  },
  imagem: {
    width: 215,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    color: '#FFFFFF',
  },
  botao: {
    backgroundColor: '#FFFF00',
    padding: 15,
    marginVertical: 10,
    borderRadius: 90,
  },
  textoBotao: {
    color: 'black',
    textAlign: 'center',
  },
  resultado: {
    fontSize: 30,
    marginVertical: 5,
    color: '#FFFFFF',
  },
});
