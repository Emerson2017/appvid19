import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, Linking } from 'react-native';
import { useNavigation  } from '@react-navigation/native';

const Home = () =>{
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <ImageBackground source={require('../../../assets/images/background-virus.png')} style={styles.backgroundHeader}>
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
              <Text style={styles.textHeader2}>COVID 19</Text>
            </View>
            <View style={styles.containerHeader3}>
              <Text style={styles.text1Header3}>Meios de combate e retenção ao coronavírus</Text>
              <Text style={styles.text2Header3}>Obtenha os dados mais atualizados sobre COVID 19 em todo o Brasil e saiba como se prevenir</Text>
            </View>
            <View style={{padding: 7, flexDirection:"row", width: '95%', height: 55, marginTop: 20}}>
              <View style={{width: '50%', paddingRight: 13}}>
                <TouchableOpacity
                onPress={()=> Linking.openURL('tel:0800 275 1475')} 
                style={{justifyContent:"center", alignItems:"center", height: '100%', backgroundColor:'#FF4500', borderRadius: 20}}>
                  <Text style={{color:'white'}}>EMERGÊNCIA</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '50%', paddingLeft: 13}}>
                <TouchableOpacity style={{justifyContent:"center", alignItems:"center", height: '100%', 
                backgroundColor:'#20B2AA', borderRadius: 20}}>
                  <Text style={{color:'white'}}>AGENDA COVID</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground> 
      </View>
      <View style={styles.containerBody}>
        <View style={styles.subcontainerBody}>
          <View style={styles.titlecontainerSintomas}>
            <Text style={styles.TitleDefault}>Sintomas de <Text style={styles.textSintomasChangeColor}>Covid 19</Text></Text>
          </View>
          <View style={styles.containerSintomas}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.sintoma}>
                    <View style={styles.containerImageSintoma}>
                        <View style={styles.boxImageSintoma}>
                            <ImageBackground style={styles.imageSintoma} source={require('../../../assets/images/febre.png')}>
                            </ImageBackground>
                        </View>    
                    </View>
                    <View style={styles.ContainertextSintoma}>
                      <Text style={styles.textSintoma}>Febre</Text>
                    </View>
                </View>
                <View style={styles.sintoma}>
                    <View style={styles.containerImageSintoma}>
                        <View style={styles.boxImageSintoma}>
                            <ImageBackground style={styles.imageSintoma} source={require('../../../assets/images/tosse.png')}>
                            </ImageBackground>
                        </View>    
                    </View>
                    <View style={styles.ContainertextSintoma}>
                      <Text style={styles.textSintoma}>Tosse</Text>
                    </View>
                </View>            
                <View style={styles.sintoma}>
                    <View style={styles.containerImageSintoma}>
                        <View style={styles.boxImageSintoma}>
                            <ImageBackground style={styles.imageSintoma} source={require('../../../assets/images/dorCabeca.png')}>
                            </ImageBackground>
                        </View>    
                    </View>
                    <View style={styles.ContainertextSintoma}>
                      <Text style={styles.textSintoma}>Dor de Cabeça</Text>
                    </View>
                </View>
                <View style={styles.sintoma}>
                    <View style={styles.containerImageSintoma}>
                        <View style={styles.boxImageSintoma}>
                            <ImageBackground style={styles.imageSintoma} source={require('../../../assets/images/dorPeito.png')}>
                            </ImageBackground>
                        </View>    
                    </View>
                    <View style={styles.ContainertextSintoma}>
                      <Text style={styles.textSintoma}>Dor no Peito</Text>
                    </View>
                </View>                        
            </ScrollView>
          </View>
          <View style={styles.titleContainerPrevencao}> 
            <Text style={styles.TitleDefault}>Prevenção</Text>
          </View>
          <View style={styles.ContainerPrevencoes}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.prevencao}> 
                <View style={styles.prevencaoWidth50percentage}>
                  <Image style={styles.imagePrevencao} source={require('../../../assets/images/lavarMaos.png')}/>
                </View>
                <View style={styles.prevencaoWidth50percentage}>
                    <Text style={styles.textPrevencao}>LAVAR</Text>
                    <Text style={{flexWrap: "wrap", fontSize: 11}}>as mãos</Text>
                </View>   
              </View>
              <View style={styles.prevencao}> 
                <View style={styles.prevencaoWidth50percentage}>
                  <Image style={{width:33, height: 57}} source={require('../../../assets/images/cobrirBoca.png')}/>
                </View>
                <View style={styles.prevencaoWidth50percentage}>
                    <Text style={styles.textPrevencao}>COBRIR</Text>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>ao tossir</Text>
                </View>   
              </View>
              <View style={styles.prevencao}> 
                <View style={styles.prevencaoWidth50percentage}>
                  <Image style={{width: 50, height: 50}} source={require('../../../assets/images/higiene.png')}/>
                </View>
                <View style={styles.prevencaoWidth50percentage}>
                    <Text style={styles.textPrevencao}>HIGIENIZAR</Text>
                    <Text style={{flexWrap: "wrap", fontSize: 11}}>sempre</Text>
                </View>   
              </View>
              <View style={styles.prevencao}> 
                <View style={styles.prevencaoWidth50percentage}>
                  <Image style={{width: 41, height: 49}} source={require('../../../assets/images/mascara.png')}/>
                </View>
                <View style={styles.prevencaoWidth50percentage}>
                  <Text style={styles.textPrevencao}>USAR</Text>
                    <Text style={{flexWrap: "wrap", fontSize: 11}}>máscara</Text>
                </View>   
              </View>
            </ScrollView> 
          </View>
          <TouchableOpacity 
            style={{ flexDirection:"row", borderRadius: 18, width: '95%', height:70, backgroundColor: 'white', marginTop:30}}
            onPress={()=>navigation.navigate('Statistics')}
          >
            <View style={{ width:'30%', alignItems:"center", justifyContent:"center"}}>
              <Image
                source={require('../../../assets/images/map.png')}
                style={{width: 80, height: 40}}
              />
            </View>
            
            <View style={{width:'60%', justifyContent:"center"}}>
              <Text style={{color:'rgb(160, 32, 240)', fontSize: 17, fontWeight: 'bold'}}>CASOS</Text>
              <Text style={{ fontSize:11 }}>BRASIL</Text>
            </View>
            
            <View style={{ width:'10%', alignItems: "center", justifyContent:"center"}}>
              <Image
                source={require('../../../assets/images/next.png')}
                style={{width:20, height:20}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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


export default Home;