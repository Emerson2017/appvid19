import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';

const Start = () =>{
    return (

      <>
      <LinearGradient colors={['#8b1dee','#a958f2']} style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 3}}>
        <Image source={require('../../assets/logo.png')}  resizeMode="stretch" style={{height: 170, width: 170}}></Image>
       </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 5}}>
        <Image source={require('../../assets/virus.png')}  resizeMode="stretch" style={{height: 200, width: 260}}></Image>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 3}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Covid-19</Text>
          <Text style={{color: 'white', fontWeight: 'bold',fontStyle: 'italic', marginBottom: 30}}>Aplicação destianada a analise de casos. </Text>
          <Button title="COMEÇAR" buttonStyle={{height: 50, backgroundColor: 'white', borderRadius: 25, width: 300, }} titleStyle={{color: '#a958f2', fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2}}/>
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

export default Start;