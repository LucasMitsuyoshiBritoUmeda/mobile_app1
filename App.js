import { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, ImageBackground } from 'react-native';
import favi from './assets/favicon.png';
import {Ionicons} from '@expo/vector-icons'
export default function App() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass]= useState(true);

  function handleExibir()
  {
  Alert.alert
  ("Excluir", 'Deseja realmente excluir?', 
    [{text: 'Excluir', onPress:() => Alert.alert('Excluído com sucesso')}, 
      {text: 'Não', onPress: () => Alert.alert('Operação cancelada')}
    ]);
  }

  function handleEntrar()
  {
    Alert.alert("Logado");
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Meme_gato.png')} style={{ width: '100%', height: '100%', position:'absolute' }}/>
      <Image resize='cover' width={100} height={100} source={favi} style={styles.image} />
      <Text style={styles.cor} >Juazeiro</Text>
      <TextInput style={styles.inputA} placeholderTextColor="grey" placeholder="Digite Seu Email" />
      <View style={styles.inputArea}>
        <TextInput secureTextEntry={ hidePass } value={input} onChangeText={(texto) => setInput(texto)} style={styles.inputB} placeholderTextColor="grey" placeholder="Digite Sua Senha" />
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
          { hidePass ? 
          <Ionicons name="eye" color='#fff' size={25}></Ionicons>
          :
          <Ionicons name="eye-off" color='#fff' size={25}></Ionicons>
          }
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleEntrar}><Text>Entrar</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleExibir}><Text>Exibir</Text></TouchableOpacity>
      <StatusBar backgroundColor="transparent" barStyle='light-content' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:200,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6
  },

  cor: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },

  inputArea: 
  {
    height:40,
    flexDirection: 'row',
    width: '70%',
    alignItems:'center',
    borderRadius: 15,
    backgroundColor: '#171717',
    borderColor: '#272727',
  },

  inputB:
  {
    width:'85%', 
    height:50,
    color:'#fff',
    padding: 10,
  },

  icon: 
  {
    width:'15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputA: {
    borderRadius: 15,
    backgroundColor: '#171717',
    borderColor: '#272727',
    width: '70%',
    height: 40,
    color: 'white',
    marginTop: 20,
    marginBottom:20,
    padding: 10
  },

  btn: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    width: '30%',
    borderRadius: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 10,
  },
});
