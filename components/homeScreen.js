import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Button,Image} from 'react-native'


 class homeScreen extends Component {

    constructor(props){
        super(props);
        }

        goto() {
            this.props.navigation.navigate('AboutUs');
        }
    
    render() {
        return (
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
                <TouchableOpacity><Text style={{color:'red'}}>WELCOME TO WEDDING_SIZZLER</Text>
                </TouchableOpacity>
                <View>
                    <Image style={styles.img} source={require('../assets/banner.jpg')}/>
                    <Button style={styles.btnTest} title="click me" onPress={() => this.goto()}/>
                </View>
                <Text> WE WILL PLAN YOUR WEEDING</Text>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    logo:{
        height:25,
        width:25,
    },
    img:{
        height:330,
        width:380,
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

export default homeScreen
