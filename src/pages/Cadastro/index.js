import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Image, Text, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import { useNavigation  } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {AsyncStorage} from '@react-native-community/async-storage';

import firebaseConfig from '../../../firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token', value)
  } catch (e) {
    // saving error
  }
}

const Cadastro = () =>{
  const navigation = useNavigation();



  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [confirmSenha, setConfirmSenha] = useState([]);
  const [alert, setAlert] = useState(false);
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState('');


  const Cadastrar = (type) =>{
    if(type == 1){
      setAlert(false);
    }else{
      setAlert(true);
      setLoad(true);
      setMessage('Carregando...');

      if(senha.length < 5){
        setLoad(false);
        setMessage('Senha muito curta.');
      }else{
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(function(){
        
            storeData(1);
            navigation.navigate('Home');
          
        }).catch(()=>{
          setLoad(false);
          setMessage('Erro ao fazer Cadastro. Tente novamente.');
        });
      }
    }
  }
  
  return (
    
    <>
      <LinearGradient colors={['#8b1dee','#a958f2']} style={styles.container}>
      <AwesomeAlert alertContainerStyle={{zIndex: 999}}
          show={alert}
          showProgress={load}
          title=""
          message={message}
          closeOnTouchOutside={true}
        />
      <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 2}}>
        <Image source={require('../../assets/logo.png')}  resizeMode="stretch" style={{height: 170, width: 170, top: 30}}></Image>
       </View>

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 5}}>

        <TextInput style = {styles.input}
               placeholder = "    Email"
               placeholderTextColor = "white"
               autoCapitalize = "none"
               onChangeText = {value => setEmail(value)}/>

        <TextInput style = {styles.input}
               placeholder = "    Senha"
               placeholderTextColor = "white"
               autoCapitalize = "none"
               onChangeText = {value => {Cadastrar(1); setSenha(value)}} secureTextEntry={true}/>

        <TextInput style = {styles.input}
               placeholder = "    Confirmar Senha"
               placeholderTextColor = "white"
               autoCapitalize = "none"
               onChangeText = {value => {Cadastrar(1); setConfirmSenha(value)}} secureTextEntry={true}/>

          <Button title="Cadastrar" 
          buttonStyle={{height: 50, backgroundColor: 'white', borderRadius: 25, width: 190, }} 
          titleStyle={{color: '#a958f2', fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2}} onPress={() => Cadastrar(0)}/>


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