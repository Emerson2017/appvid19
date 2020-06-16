import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Image, Text, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';

import firebaseConfig from '../../../firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Cadastro = () =>{

  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [confirmSenha, setConfirmSenha] = useState([]);
  const [confirmSenhaText, setConfirmSenhaText] = useState('');


  const Logar = () =>{
    firebase.auth().createUserWithEmailAndPassword(email, senha);
  }
  
  return (
    
    <>
      <LinearGradient colors={['#8b1dee','#a958f2']} style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 2}}>
        <Image source={require('../../assets/logo.png')}  resizeMode="stretch" style={{height: 170, width: 170, top: 60}}></Image>
       </View>


        <View style={{justifyContent: 'center', alignItems: 'center', flex: 5}}>
        <Animated.View>
  <Text style={{fontSize: 15, marginBottom: 20, fontWeight: 'bold', fontStyle: 'italic', color: '#e74c3c'}}>{confirmSenhaText}</Text>
       </Animated.View>
        <TextInput style = {styles.input}
               placeholder = "    Email"
               placeholderTextColor = "white"
               autoCapitalize = "none"
               onChangeText = {value => setEmail(value)}/>

        <TextInput style = {styles.input}
               placeholder = "    Senha"
               placeholderTextColor = "white"
               autoCapitalize = "none"
               onChangeText = {value => setSenha(value)}/>

        <TextInput style = {styles.input}
               placeholder = "    Confirmar Senha"
               placeholderTextColor = "white"
               autoCapitalize = "none"
               onChangeText = {value => setConfirmSenha(value)}/>

          <Button title="Cadastrar" 
          buttonStyle={{height: 50, backgroundColor: 'white', borderRadius: 25, width: 190, }} 
          titleStyle={{color: '#a958f2', fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2}} onPress={() => Logar(email, senha)}/>


        </View>
      </LinearGradient>
    </>
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        height: 50,
        width: 290,
        marginBottom: 27,
        borderRadius: 15,
        backgroundColor: '#ffffff3d',
        color: 'white', padding: 10
     },
});

export default Cadastro;