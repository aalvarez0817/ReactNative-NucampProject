import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Tile } from 'react-native-elements';

function Venue() {
    Venue.navigationOptions = {
        title: 'Venue'
    }

    return (
      <View style={{paddingBottom:0}}>
        <Image
        style={{width:500, height:300}}
                 
                 
                 source={require('../public/images/BeerGarden.jpg')}
             />

             <View>
                <Text style={{marginTop: 0, height: 30, backgroundColor: 'darkred', color: 'white', textAlign:'center', textAlignVertical:'center'}}>
                  RENTAL VENUES.</Text>
                </View>
                <View style={{backgroundColor:'black'}}>
             <Text style={{color:'white'}}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat 
             odio facilisis mauris sit amet. Tellus elementum sagittis vitae et. Nisl condimentum id venenatis a. Semper feugiat nibh sed pulvinar proin. 
             Consectetur purus ut faucibus pulvinar elementum integer. Eget mi proin sed libero enim sed faucibus. Scelerisque eleifend donec pretium vulputate 
             sapien nec. Imperdiet proin fermentum leo vel. Mi quis hendrerit dolor magna eget est lorem ipsum. Sit amet commodo nulla facilisi nullam vehicula 
             ipsum a. Vitae congue eu consequat ac felis donec et odio pellentesque. At urna condimentum mattis pellentesque id nibh. Venenatis urna cursus eget 
             nunc scelerisque viverra mauris. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Sem fringilla ut morbi tincidunt augue. Ut enim 
             blandit volutpat maecenas volutpat
             </Text>
             </View>   

      </View>
 );
 
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

export default Venue;