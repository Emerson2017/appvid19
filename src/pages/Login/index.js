import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Image, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input } from 'react-native-elements';
import * as firebase from 'firebase';
import firebaseConfig from '../../../firebaseConfig';
import { useNavigation  } from '@react-navigation/native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';
import {AsyncStorage} from '@react-native-community/async-storage';


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

const Login = () =>{

  const navigation = useNavigation();

  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [alert, setAlert] = useState(false);
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState('');

  
 function Logar(type){
  if(type == 1){
    setAlert(false);
  }else{
    setAlert(true);
    setLoad(true);
    setMessage('Carregando...');

    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(user){
      if(user != null){
        storeData(1);
        console.log(1);
        navigation.navigate('Home');
      }
    }).catch(()=>{
      setLoad(false);
      setMessage('Usuário ou Senha Incorretos.');
    });
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
               onChangeText = {value => {setEmail(value);Logar(1)}}/>

        <TextInput style = {styles.input}
               placeholder = "    Senha"
               placeholderTextColor = "white"
               autoCapitalize = "none"
               onChangeText = {value => {setSenha(value); Logar(1)}} secureTextEntry={true}/>

          <Button title="Entrar" 
          buttonStyle={{height: 50, backgroundColor: 'white', borderRadius: 25, width: 190, }} 
          titleStyle={{color: '#a958f2', fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2}} 
          onPress={() => {Logar(0)}}/>

          <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
          <Text style={{color: 'white', fontWeight: 'bold',fontStyle: 'italic', marginTop: 10}}>Cadastra-se</Text>
          </TouchableOpacity>  


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
     warningText:{
       fontSize: 17,
       fontWeight: 'bold',
       fontStyle: 'italic',
       marginBottom: 15,
       color: 'red'
       }
});

export default Login;