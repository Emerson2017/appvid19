import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const Login = () =>{
    return (

      <>
      <LinearGradient colors={['#8b1dee','#a958f2']} style={styles.container}>

    
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 3}}>
          <Button title="ENTRAR" buttonStyle={{height: 50, backgroundColor: 'white', borderRadius: 25, width: 190, }} titleStyle={{color: '#a958f2', fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2}}/>
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
  });

export default Login;