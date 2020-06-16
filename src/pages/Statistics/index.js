import React from 'react';
import {StyleSheet, ImageBackground, View, Text, TouchableOpacity, Image} from 'react-native'

export default function Statics(){
    return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
          <ImageBackground 
            source={require('../../../assets/images/background-virus.png')} 
            style={styles.backgroundHeader}>

            <View style={styles.subcontainerHeader}>
              <View style={styles.containerHeader1}>
                <View style={styles.containeMenu}>
                  <TouchableOpacity>
                    <Image 
                      source={require('../../../assets/images/menu.png')} 
                      style={styles.iconMenu}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.containerIcon}>
                  <View style={styles.ContainerphotoPerfil}>
                  <Image 
                      source={{uri: 'https://www.pngkey.com/png/detail/882-8822155_sonrisa-con-brackets-png-pessoas-sorrindo-com-aparelho.png'}}
                      style={styles.photoPerfil}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.containerHeader2}>
                <Text style={styles.textHeader2}>ESTATÍSTICAS</Text>
              </View>
            </View>
          </ImageBackground> 
        </View>
        <View style={styles.containerBody}>

        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    prevencaoWidth50percentage:{
     width: '50%',
     justifyContent: "center",
     alignItems: "center",
    },
    textPrevencao:{
     fontSize: 12,
     textAlign: "center",
     color: 'rgb(160, 32, 240)',
     fontWeight: 'bold'
    },
    imageSintoma:{
       flex: 1,
       resizeMode: "cover",
    },
    boxImageSintoma:{
       width: 55,
       height: 70,
     },
     imagePrevencao:{
       width: 33,
       height: 50
     }, 
     ContainerPrevencoes:{
       marginTop: 10
     },
    prevencao:{
     backgroundColor: 'white',
     width: 160,
     height: 70,
     borderRadius: 20,
     flexDirection: "row",
     margin: 5
   },
    sintoma:{
       width: 100,
       height: 120,
       alignItems: "center",
     },  
     containerImageSintoma:{
       width: 80,
       height: 80,
       backgroundColor: 'white',
       alignItems: "center",
       justifyContent: "flex-end",
       borderRadius: 20,
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 3,
       },
       shadowOpacity: 0.37,
       shadowRadius: 7.49,
       elevation: 6,
     },
     subcontainerBody:{
       alignSelf: "stretch", 
       flex: 1,
       marginLeft: 20,
     },
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#DCDCDC'
     },
     containerHeader:{
       backgroundColor: '#A020F0',
       flex: 4,
       alignSelf: "stretch",
       borderBottomLeftRadius: 40,
       borderBottomRightRadius: 40,
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 6,
       },
       shadowOpacity: 0.37,
       shadowRadius: 7.49,
       elevation: 12,
     },
     containerBody:{
       flex: 6,
       alignSelf: "stretch"
     },
     ContainerphotoPerfil:{
       height:33,
       width: 33,
       borderRadius: 50,
       backgroundColor: 'white',
       marginRight: 20
     },
     ContainertextSintoma:{
       marginTop: 10
     },
     iconMenu:{
       width: 23,
       height: 23,
     },
     containerHeader1:{
       flexDirection: "row",
       alignItems: "center"
     },
     containeMenu:{
       width: '50%',
       alignItems: "flex-start"
     },
     containerIcon:{
       width: '50%',
       alignItems: "flex-end",
     },
     photoPerfil: {
       height:33,
       width: 33,
       borderRadius: 50,
     },
     textHeader2:{
       color:'white',
       fontSize:25,
       fontWeight: 'bold'
     },
     subcontainerHeader:{
       marginLeft: 20,
       height: '65%'
     },
     containerHeader2:{
       marginTop: 15
     },
     containerHeader3:{
       marginTop: 10
     },  
     text1Header3:{
       color: '#D3D3D3',
       fontWeight: 'bold'
     },
     text2Header3:{
       color: '#D3D3D3',
       fontSize: 11,
       width: '80%',
       marginTop:5,
       fontWeight: 'bold'
     }, 
     backgroundHeader:{
       flex: 1,
       resizeMode: "cover",
       justifyContent: "center"
     },
     titlecontainerSintomas:{
         marginTop: 15
     },
     containerSintomas:{
       flexDirection:'row',
       marginTop: 15
     },
     TitleDefault:{
       color:'#696969',
       fontWeight: 'bold',
       fontSize: 19
     },
     textSintomasChangeColor:{
       color: '#A020F0',
       fontWeight: 'bold',
     }
   });
   