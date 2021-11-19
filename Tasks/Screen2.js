


import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Image, ScrollView,
  ImageBackground, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator, StatusBar, TextInput, FlatList, TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import Video from 'react-native-video';

//import Video from 'react-native-af-video-player-updated'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isVisible: true,
      Data: [],
      name: '',
      index: 0,
      path: '',
      paused: true,
    }
  }

  componentDidMount() {
    let Data = this.props.navigation.getParam("Data")
    let name = this.props.navigation.getParam("name")
    let index = this.props.navigation.getParam("index")
    let path = this.props.navigation.getParam("path")
    this.setState({
      Data: Data,
      name: name,
      index: index,
      path: path,
    })

  }


  render() {
    return (
      <>

        <>
          <StatusBar
            backgroundColor='#0e918c'      // #0e918c
            barStyle='light-content'
          />
          <View style={{
            width: '100%',
            height: '8%',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#0F9A92',
            flexDirection: 'row',
            paddingLeft: 0,
            // paddingRight: 15
          }}>

            <View
              style={{
                width: '22%',
                height: '98%',
              }}>
              <Image source={require('../img/mmmm.png')}
                style={{
                  width: '100%',
                  height: '98%',
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View
              style={{
                width: '60%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}>

              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>رحلة {this.state.name}</Text>
            </View>

            <View style={{
              width: '20%',
              height: '98%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack()
                }}
              >
                <Icon name='arrow-left' style={{ color: '#fff' }} size={22} />
              </TouchableOpacity>
            </View>
          </View>



          <ScrollView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: '3%',
              }}>

              <FlatList
                data={this.state.Data}
                renderItem={({ item, index }) =>
                  <>
                    {
                      item.Data_img == '' ?
                        (
                          <View
                            style={{
                              // justifyContent:'space-between',
                              alignItems: 'center',
                              // backgroundColor:'#e1e1e1',
                              // marginBottom:25,
                              // borderRadius:15,
                              width: windowWidth * .95,
                              padding: 7,
                            }}>

                            <Text style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              color: '#16697a',
                              marginTop: 5,
                              textAlign: 'justify',
                              lineHeight: 40,

                            }}>{item.text}</Text>
                          </View>


                        ) : (
                          <View
                            style={{
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              // backgroundColor:'#e1e1e1',
                              // marginBottom:25,
                              borderRadius: 15,
                              width: windowWidth * .95,
                              padding: 7,
                            }}>
                            <Image source={item.Data_img}
                              style={{
                                width: windowWidth * .9,
                                height: windowHeight * .45,
                                //  resizeMode:'contain',
                                borderRadius: 5
                              }}
                            />

                            <Text style={{
                              fontSize: 21,
                              fontWeight: 'bold',
                              color: '#16697a',
                              marginTop: 5,
                              textAlign: 'justify',
                              lineHeight: 40,

                            }}>{item.text}</Text>
                          </View>
                        )

                    }


                  </>
                }

              />



            </View>

          </ScrollView>
        </>



      </>
    )
  }

}

