
import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Image, ScrollView,
  ImageBackground, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator, StatusBar, TextInput, FlatList, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import Video from 'react-native-video';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      Items: [],
      name: '',
      index: 0,
      modal_visible: false,
      src: '',
    }
  }

  componentDidMount() {
    let Items = this.props.navigation.getParam("Items")
    let name = this.props.navigation.getParam("name")
    let index = this.props.navigation.getParam("index")
    this.setState({
      Items: Items,
      name: name,
      index: index,
    })
  }


  render() {
    return (
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
              }}>{this.state.index == 0 ? "السيرة الشخصية" :
                this.state.name}</Text>
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


        {
          this.state.index == 0 || this.state.index == 1 ?
            (
              <ScrollView>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: '5%'
                  }}>

                  {
                    this.state.Items.map((data, index) =>
                      <>
                        {
                          data.img == '' ?
                            (
                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: windowWidth * .95,
                                  padding: 10,
                                }}>

                                <Text
                                  style={{
                                    fontSize: 21,
                                    fontWeight: 'bold',
                                    color: '#16697a',
                                    marginTop: 5,
                                    textAlign: 'justify'
                                  }}>{data.text}</Text>
                              </View>

                            ) : (

                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: windowWidth * .95,
                                  padding: 10
                                }}>

                                <Image source={data.img}
                                  style={{
                                    width: windowWidth * .9,

                                    height: windowHeight * .48,
                                    // resizeMode: 'cover',
                                    borderRadius: 10
                                  }}
                                />

                                <Text style={{
                                  fontSize: 21,
                                  fontWeight: 'bold',
                                  color: '#16697a',
                                  marginTop: 5,
                                  textAlign: 'justify'
                                }}>{data.text}</Text>

                              </View>
                            )
                        }
                      </>
                    )
                  }

                  <View style={{ margin: 0, marginBottom: 20, width: windowWidth * .95 }}>
                    <Text style={{ fontSize: 21, color: '#d7a528', fontWeight: 'bold', }}>تابعونا على جروب : </Text>
                    <TouchableOpacity activeOpacity={.5}
                      onPress={() => {
                        Linking.openURL("https://www.facebook.com/935231356627394/")
                      }}
                    >
                      <Text style={{ fontSize: 18, color: '#16697a', fontWeight: 'bold', }}> هنشوف بلدنا على العجلة :https://www.facebook.com/935231356627394/</Text>
                    </TouchableOpacity>

                  </View>


                </View>





                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: '50%',
                    height: '1.1%',
                    // backgroundColor: '#ddd',
                    alignSelf: 'center',
                  }}>

                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity activeOpacity={.5}
                      onPress={() => {
                        Linking.openURL("tel:" + '01228076630')
                      }}
                    >
                      <Icon name="phone" size={25}
                        style={{
                          color: "#00f",
                        }} />
                    </TouchableOpacity>
                  </View>


                  <View style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>

                    <TouchableOpacity activeOpacity={.5}
                      style={{ justifyContent: "center" }}
                      onPress={() => {
                        Linking.openURL("https://api.whatsapp.com/send?phone=201228076630")
                      }}
                    >
                      <Icon name="whatsapp-square" size={32}
                        style={{
                          color: "#27ae60",
                        }} />
                    </TouchableOpacity>
                  </View>


                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity activeOpacity={.5}
                      onPress={() => {
                        Linking.openURL("https://www.facebook.com/profile.php?id=100007491975076")
                      }}
                    >
                      <Icon name="facebook" size={32}
                        style={{
                          color: "#0085FF",
                        }} />
                    </TouchableOpacity>
                  </View>
                </View>


                <View
                  style={{
                    flexDirection: 'row',
                    width: windowWidth * .95,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginBottom: '12%'
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      width: '50%',

                    }}>
                    <Text style={{ fontSize: 23, color: '#d7a528', fontWeight: 'bold', textAlign: 'center' }}>فكرة</Text>
                    <Text style={{ fontSize: 19, color: '#16697a', fontWeight: 'bold', textAlign: 'center' }}>الكابتن : محمد المصرى</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'column',
                      width: '50%',
                      alignSelf: 'flex-end',

                    }}>
                    <Text style={{ fontSize: 23, color: '#d7a528', fontWeight: 'bold', textAlign: 'center' }}>تنفيذ</Text>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Text style={{ fontSize: 19, color: '#16697a', fontWeight: 'bold', }}>المهندس : محمود حنفى</Text>
                    </View>

                  </View>

                </View>
              </ScrollView>

            ) : (


              <ScrollView>
                <View style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: '7%',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>

                  {
                    this.state.Items.map((data, index) =>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate('Page3', {
                            Data: data.Data,
                            name: data.item_name,
                            index: this.state.index,
                          })
                        }}
                      >
                        <View
                          style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#ddd',
                            marginBottom: windowHeight * .06,
                            borderRadius: 15,
                            width: '100%',
                            height: windowHeight * .23,
                            paddingBottom: 10

                          }}>
                          <Image source={data.item_img}
                            style={{
                              width: 155, height: 115,
                              //resizeMode:'contain',
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            }}
                          />

                          <Text style={{
                            fontSize: 21,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#16697a',
                            marginTop: 5
                          }}>{data.item_name}</Text>
                        </View>
                      </TouchableOpacity>
                    )
                  }
                </View>
              </ScrollView>
            )
        }


      </>
    )
  }
}
