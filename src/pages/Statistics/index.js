import React, {useState} from 'react';
import {StyleSheet, ImageBackground, View, Text, TouchableOpacity, Image} from 'react-native'
import { PieChart } from 'react-native-svg-charts'


export default function Statics(){
    const [data, setData] = useState([88992, 35108, 12300])

    const randomColor = ['#FFA500','#66CDAA', '#FF6347'];

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor[index],
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

        function alterData(v1, v2, v3){
          setData([v1, v2, v3])
          console.log(data)
        }        

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
            <View style={{elevation: 24 ,flexDirection: "row", marginTop: -100, backgroundColor:'white', width:'90%', borderRadius: 20, height: 170, justifyContent:"center", alignItems:"center" }}>    
                <PieChart 
                animate={true}
                animationDuration={90000} 
                style={{ height: 130, width: 130, marginLeft: 15 }} 
                data={pieData} 
                
                />
                <View style={{width:'50%', height: '80%', paddingLeft: 20, paddingRight: 10, flexDirection:"column"}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{height: 15, width: 30, backgroundColor:'#FFA500'}}></View>
                        <View style={{flexDirection:"column", alignItems:"flex-end", marginLeft: 20, flex: 1}}>
                            <Text style={{textAlign:"center"}}>Confirmados</Text>
                            <Text style={{fontWeight:'bold', fontSize:15}}>{data[0]}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", marginTop: 10 }}>
                        <View style={{height: 15, width: 30, backgroundColor:'#66CDAA'}}></View>
                        <View style={{flexDirection:"column", alignItems:"flex-end", marginLeft: 20, flex: 1}}>
                            <Text style={{textAlign:"center"}}>Recuperados</Text>
                            <Text style={{fontWeight:'bold', fontSize:15}}>{data[1]}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", marginTop: 10}}>
                        <View style={{height: 15, width: 30, backgroundColor:'#FF6347'}}></View>
                        <View style={{flexDirection:"column", alignItems:"flex-end", marginLeft: 20, flex: 1}}>
                            <Text style={{textAlign:"center"}}>Mortes</Text>
                            <Text style={{fontWeight:'bold', fontSize:15, alignSelf:"flex-end"}}>{data[2]}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View>
              <TouchableOpacity onPress={()=>alterData(20, 400, 200)}>
                <Text>CLICK</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>alterData(230, 4400, 9200)}>
                <Text>CLICK2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>alterData(8860, 400, 2200)}>
                <Text>CLICK2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>alterData(664, 2200, 8200)}>
                <Text>CLICK2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>alterData(207, 7500, 3200)}>
                <Text>CLICK2</Text>
              </TouchableOpacity>
            </View>
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
       alignSelf: "stretch",
       alignItems:"center"
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
   