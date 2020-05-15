import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';


function Home() {

   
    Home.navigationOptions = {
        title: 'Home'
    }

    return (
         <ScrollView>
           <Tile style={{height:100}}
                    title="THE ROYAL SHACK"
                  
                    caption="DRINK GOOD BEER WITH GOOD FRIENDS"
                    featured
                    
                    imageSrc={require('../public/images/The-Tap.jpg')}
                />

                <View>
                   <Text style={{height: 30, backgroundColor: 'darkred', color: 'white', textAlign:'center', textAlignVertical:'center'}}>ENJOY GOURMET BURGERS AND MORE.</Text>
                   </View>
                 <View style={{alignItems: 'center', backgroundColor: 'black'}}>
                   <Image 
               
                   style={{height:100, width:200, marginTop: 15, marginBottom: 5}}
                     source={require('../public/images/Drinks.jpg')}
                   />
                   <Text style={{textAlign:'center', color:'white', marginBottom:20}}>DRINKS</Text>

                   <Image 
               
               style={{height:100, width:200, marginBottom: 5}}
                 source={require('../public/images/Burgers.jpg')}
               />
               <Text style={{textAlign:'center', color:'white', marginBottom:20}}>MENU</Text>

               <Image 
               
                   style={{height:100, width:200, marginBottom: 5}}
                     source={require('../public/images/band-playing2.jpg')}
                   />
                   <Text style={{textAlign:'center', color:'white', marginBottom:20}}>EVENTS</Text>
                 </View>


         </ScrollView>
    );
    }

    const styles = StyleSheet.create({
        container: {
          //height: 2,
          paddingTop:2,
         // flex: 1,
          backgroundColor: 'darkred',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

export default Home;