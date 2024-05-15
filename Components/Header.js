import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = props => {
  const {title,user} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.user}>{user}</Text>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding:10,
    borderBottomColor:'white',
    borderBottomWidth:0.5
  },
  title: {color: 'black', fontWeight: '500', fontSize: 28, margin: 5},
  user: {color: 'black', fontWeight: '500', fontSize: 20, margin: 10},

});
