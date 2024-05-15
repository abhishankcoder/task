import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../Constant/Images';
const Inputext = props => {
  const {
    placeholder,
    placeholderTextColor,
    keyboardType,
    secureTextEntry,
    onChangeText,
    value,
    label,
    inputStyle,
    type,
    rightIcon,
    onRightPress,
    errorText,
    maxLength,
    color,
    emailIcon,
    userIcon
    
  } = props;
  return (
    <View>
      
      {type === 'yes' && <Text style={styles.labelStyle}>{label}</Text>}
      <View style={{...styles.inputStyle, ...inputStyle}}>
        
        <KeyboardAvoidingView keyboardVerticalOffset={100}>
          
          <View style={styles.inline}>
            
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              onChangeText={onChangeText}
              value={value}
              errorText={errorText}
              maxLength={maxLength}
              color={color}
              
            />
            {rightIcon ? (
              <TouchableOpacity onPress={onRightPress}>
                
                <Image style={{tintColor: '#FFAC1C',width:20,height:20}} source={rightIcon} />
              </TouchableOpacity>
            ) : null}

{emailIcon ? (
                
                <Image style={{tintColor: '#FFAC1C',width:20,height:20}} source={Images.Email} />
            ) : null}
            {userIcon ? (
                
                <Image style={{tintColor: '#FFAC1C',width:20,height:20}} source={Images.User} />
            ) : null}
           
          </View>
        </KeyboardAvoidingView>
      </View>
      {errorText ? (
        <View>
          
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    textAlign: 'left',
    margin:10
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 12,
    marginTop: 10,
    width: '100%',
    padding: 10,
    
  },
  errorText: {color: 'red', textAlign: 'center', marginTop: 10},
  enterStyle:{
    color:'black'
  }
});
export default Inputext;
