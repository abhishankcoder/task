//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Images from '../../Constant/Images';
import Strings from '../../Constant/Strings';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(function () {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.txt}>{Strings.Let}</Text>
        <Image style={styles.icon} source={Images.Music} />
        <Text style={styles.txt}>{Strings.Bring}</Text>
      </View>
    </View>
  );
};

// define your styles


//make this component available to the app
export default Splash;
