import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
const Btn = ({btnText, onPress = () => {}}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.btnOne}>
          <Text style={styles.btntxt}>{btnText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btntxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnOne: {
    // borderColor: 'gray',
    borderRadius: 12,
    backgroundColor: '#FFAC1C',
    padding: 10,
    marginTop: 20,
    bottom: 5,
    margin: 5,
  },
});
export default Btn;
