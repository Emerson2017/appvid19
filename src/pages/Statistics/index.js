import React, {useState, useEffect} from 'react';
import {StyleSheet, ImageBackground, View, Text, TouchableOpacity, Image} from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { PieChart, YAxis, LineChart, Grid } from 'react-native-svg-charts'
import axios from 'axios'
import ModalDropdown from 'react-native-modal-dropdown'
import ObjStatesBrazil from '../../data/statesBrazil.json'


export default function Statics(){
  const [data, setData] = useState([])
  const [statesbrazil, setStatesbrazil] = useState([])
  const [visible, setvisible] = useState(false)
  const [visibleline, setVisibleline] = useState(false)
  const [historystates, setHistorystates] = useState([])
  const randomColor = ['#FFA500', '#66CDAA', '#FF6347'];
  const contentInset = { top: 20, bottom: 20 }

  const endpoints = {
    brands : {
      endpoint : 'https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/'
    }, 
    history: {
      endpoint : 'https://api.apify.com/v2/datasets/3S2T1ZBxB9zhRJTBB/items?format=json&clean=1'
    },
    stateDefult : {
      endpoint : 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/CE'
    },
    getState : {
      endpoint : 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/'
    },
    ImagemPerfilExemplo : {
      endpoint : 'https://www.pngkey.com/png/detail/882-8822155_sonrisa-con-brackets-png-pessoas-sorrindo-com-aparelho.png'
    }
  }

  useEffect(() => {
    getValuesCE()
    getStatesBrazil()
    getHistoryConfirmedStates()
  }, [])

  function states_renderRow(row){
    return(
      <TouchableOpacity style={{height: 30, flexDirection:'row', marginLeft:20}}>
        <Image 
          style={{width: 20, height: 20}}
          source={{uri: `${endpoints.brands.endpoint}${row.sigla}.png`}}  
        />
        <Text style={{fontSize: 20}}> {row.nome} </Text>
      </TouchableOpacity>
    )
  }

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
        
    async function getHistoryConfirmedStates(sigla){
      const arrayPush = []
      await axios.get(`${endpoints.history.endpoint}`)
      .then(function(response){
        const parseArr = response.data; 
        parseArr.map((e,i)=>{
          e.infectedByRegion.filter(function(item){
            if(sigla)
              return item.state == sigla
            else  
              return item.state == 'CE'
          }).map((e, i) =>{
            arrayPush.push(e.count)
          })
        })
        setHistorystates(arrayPush)
        setVisibleline(true)
      })
    }

    async function getValuesCE(){
      await axios.get(`${endpoints.stateDefult.endpoint}`)
      .then(function(response){
        const dadosCovid = response.data;
        setData([dadosCovid['cases'], dadosCovid['suspects'], dadosCovid['deaths']]);
        setvisible(true)
      })
    }

    function getStatesBrazil(){
      setStatesbrazil(ObjStatesBrazil.UF)
    }

    async function changeData(row){
      setVisibleline(false)
      getHistoryConfirmedStates(row.sigla);
      setvisible(false)
      await axios.get(`${endpoints.getState.endpoint}${row.sigla}`)
      .then(function(response){
        const dadosCovid = response.data;
        setData(
          [dadosCovid['cases'], 
          dadosCovid['suspects'], 
          dadosCovid['deaths']]
          );
        setvisible(true)
      })
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
                      source={{uri: `${endpoints.ImagemPerfilExemplo.endpoint}`}}
                      style={styles.photoPerfil}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.containerHeader2}>
                <Text style={styles.textHeader2}>ESTATÍSTICAS</Text>
                  <View style={styles.ContainerDropdawn}>
                    <Image
                      source={require('../../../assets/images/place.png')}
                      style={{width:21, height:21, marginLeft: 15}}
                    />
                    <ModalDropdown
                      defaultValue={'Ceará, CE'}
                      textStyle={{fontSize: 13}}
                      options={statesbrazil}
                      renderRow={(row) => states_renderRow(row)}
                      renderButtonText={(row) => {return row.nome +", "+row.sigla}}
                      onSelect={(index, row) => changeData(row)}
                      dropdownStyle={{width: '89%', marginLeft: -35, borderRadius: 20, height: 400}}
                    />
                    <Image
                      source={require('../../../assets/images/down-arrow.png')}
                      style={{width:15, height:15, marginLeft:'auto', marginRight: 10 }}
                    />
                </View>
              </View>
            </View>
          </ImageBackground> 
        </View>
        <View style={styles.containerBody}>
          <View style={{elevation: 25, flexDirection: "row", marginTop: -80, 
          backgroundColor:'white', width:'90%', borderRadius: 20, height: 170, 
          justifyContent:"center", alignItems:"center" }}>    
            <ShimmerPlaceHolder 
              autoRun={true} 
              visible={visible}
              style={{ height: 130, width: 130, marginLeft: 15, borderRadius: 70 }}
            >
              <PieChart 
              style={{ height: 130, width: 130, marginLeft: 15 }} 
              data={pieData} 
              />
            </ShimmerPlaceHolder> 
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
                          <Text style={{textAlign:"center"}}>Suspeitos</Text>
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
          <ShimmerPlaceHolder 
              autoRun={true} 
              visible={visibleline}
              style={{ marginTop:30, height: 260, width:'90%', elevation: 25, borderRadius: 20 }}
            >
              <View style={{ marginTop:30, height: 260, width:'90%', paddingLeft: 10, elevation: 25,
              paddingRight:10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 20 }}>               
                  <YAxis
                      data={historystates}
                      contentInset={contentInset}
                      svg={{
                          fill: 'black',
                          fontSize: 10,
                      }}
                      numberOfTicks={12}
                      formatLabel={(value) => value}
                  />
                  <LineChart
                      style={{ flex: 1, marginLeft: 20 }}
                      data={historystates}
                      svg={{ stroke: 'rgb(134, 65, 244)' }}
                      contentInset={contentInset}
                  >
                      <Grid />
                  </LineChart>
            </View>
          </ShimmerPlaceHolder>            
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    ContainerDropdawn:{
      backgroundColor: 'white', 
      height: 30, 
      marginTop: 20, 
      width: '94%', 
      borderRadius: 20,
      alignItems: "center",
      flexDirection: "row"
    },
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
   