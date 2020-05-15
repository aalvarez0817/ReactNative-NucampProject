import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

function Contact() {
    Contact.navigationOptions = {
        title: 'Contact'
    }

    return (
         <View style={styles.container}>
            <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                                    
                                    <Text>123 Crown Drive{"\n"}
                                    Chicago, IL 99999{"\n"}
                                    U.S.A.{"\n\n"}
                
                                    Phone: 1-206-555-1234{"\n"}
                                    Email: contactus@royalshack.com</Text>
                
                               
                               
                                         </Card>
       
         </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          //justifyContent: 'center',
        },
      });

export default Contact;