/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   ImageBackground,
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';
 
 
 class DrinkWaterMonitorApp extends Component {
constructor(props){
  super(props);
  this.state = {quantity: 0, status: 'Ruim', percentage: 0}
  this.addWater = this.addWater.bind(this);
  this.update = this.update.bind(this);
}

update(){
  let state = this.state;
  state.percentage = Math.floor(((state.quantity/2000) * 100))

  if(state.percentage >= 100){
    state.status = 'Bom'
  } else {
    state.status = 'Ruim'
  }

  this.setState(state);
}

addWater(){
  let state = this.state;
  state.quantity += 200;
  this.setState(state);
  this.update();

}

   render() {
     return (
       <View style={styles.body}>
        <ImageBackground source= {require('./images/waterbg.png')} style={styles.image}>
          <View style={styles.infoArea}>

            <View style={styles.area}>
              <Text style={styles.titleArea} >Meta</Text>
              <Text style={styles.dataArea} >2000 ml</Text>
            </View>

            <View style={styles.area}>
              <Text style={styles.titleArea}>Consumido</Text>
              <Text style={styles.dataArea}>{this.state.quantity} ml</Text>
            </View>
 
            <View style={styles.area}>
              <Text style={styles.titleArea}>Status</Text>
              <Text style={styles.dataArea}>{this.state.status}</Text>
            </View>

          </View>

          <View style={styles.percentageArea}>
            <Text style={styles.percentageText}>{this.state.percentage}%</Text>
          </View>       
          <View style = {styles.buttonArea} >
            <Button title='Beber 200 ml' onPress={this.addWater}></Button>
          </View>   

        </ImageBackground>
       </View>
     );
   }
 }

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  image: {
    flex: 1,
    width:null,
  },
  infoArea: {
    flex: 1,
    flexDirection:'row',
    marginTop: 50,
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  titleArea: {
    color: '#45b2fc',
    alignItems: 'center',
  },
  dataArea: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold',
  },
  percentageArea: {
    alignItems: 'center',
  },
  percentageText: {
    color: '#FFFFFF',
    fontSize: 70,
    backgroundColor: 'transparent',
  },
  buttonArea: {
    marginTop: 10,
  },
  
});


export default DrinkWaterMonitorApp;