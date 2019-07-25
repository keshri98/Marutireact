import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,ScrollView,Button } from 'react-native'

export class aboutUs extends Component {
    constructor(props){
        super(props);
        }

        goto() {
            this.props.navigation.navigate('service');
        }
    render() {
        return (
            <ScrollView>
            <View>
             <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}>
                        Wedding_Sizzler
                        </Text>
                        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
                    </View>
                    </View>
                    <View>
                    <View >
                    <Image style={styles.img} source={require ('../assets/2.jpg')}/>
                    </View>
                    <TouchableOpacity><Text style={{color:'red',fontSize:20,textAlign:'center'}}>Where there is love there is life</Text>
                </TouchableOpacity>
                   
                </View>
                <View>
             <Text style={styles.Text}>We provides an easy way to plan their special events with an experience of 2 year</Text>
                
          <Text style={styles.Text}>When you start for planning for your wedding there are a lot of things to arrange so to help you we are here providing our best services</Text>
          <Text style={styles.Text}>
              You can add all the details of the event and can get the service. 
              You can select the type of event, type of food to be served, type of decoration and estimated budget.
               All the details given by you will be verified by us. We will add all the details of the planner 
               based on your requirement and send the your's event details to the planner. 
               The planner will verify and send his response with a confirmation mail.
               Further you needs to complete the payment process to confirm your order.
          </Text>
          <Button style={styles.btnTest} title="Goto Services" onPress={() => this.goto()}/>

          </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        height:25,
        width:25,
    },
    img:{
        
        resizeMode:'contain',
        // height:500,
        // width:500,
    },
    Text:{
        marginTop:5,
        marginBottom:5,
        padding:5,

    },
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        // backgroundColor:"#FFF",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        flex: 1,
        color: '#FFF',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: '#FFF'
    },
})

export default aboutUs
