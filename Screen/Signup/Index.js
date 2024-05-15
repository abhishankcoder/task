//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput,ScrollView, Alert} from 'react-native';
import Inputext from '../../Components/Inputext';
import Images from '../../Constant/Images';
import Strings from '../../Constant/Strings';
import Btn from '../../Components/Btn';
import { White } from '../../Constant/Color';
import axios from 'react-native-axios';

// create a component
const Signup = () => {
  const [secure, setSecure] = useState(false);
  const [secureone, setSecureone] = useState(false);
  const [name,setName] = useState('');
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');


  const submit =()=>{
    axios.post('http://localhost:5000/create', {
      title: title,
      body: body,
      name:name
    })
    .then((response) => {
      console.log("res>><<",response);
      Alert('Done ')
    }, (error) => {
      console.log("err",error);
    });
  }


  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.main}>
        <Text style={styles.heading}>Signup</Text>
        <Inputext
          label={Strings.first}
          type={Strings.yes}
          placeholderTextColor={White}
          placeholder={Strings.first}
          color={White}
          userIcon={Images.User}

          onChangeText={(txt)=>setName(txt)}
          value={name}
          // errorText={errorText}
        />
         <Inputext
          label={Strings.last}
          type={Strings.yes}
          placeholderTextColor={White}
          placeholder={Strings.last}
          color={White}
          userIcon={Images.User}

          onChangeText={(txt)=>setTitle(txt)}
          value={title}
          // errorText={errorText}
        />
        <Inputext
          label={Strings.Email}
          type={Strings.yes}

          placeholderTextColor={White}
          placeholder={Strings.Email}
          color={White}
          emailIcon={Images.Email}
          onChangeText={(txt)=>setBody(txt)}
          value={body}
          // errorText={errorText}
        />
        {/* <Inputext
          label={Strings.Password}
          type={Strings.yes}

          placeholderTextColor={White}
          placeholder={Strings.Password}
          color={White}
          secureTextEntry={secure}
          onRightPress={()=>setSecure(!secure)}
          rightIcon={secure ? Images.Eye : Images.Hidden}
          // onChangeText={}
          // value={value}
          // errorText={errorText}
        />
        <Inputext
          label={Strings.Cpassword}
          type={Strings.yes}

          placeholderTextColor={White}
          placeholder={Strings.Cpassword}
          color={White}
          secureTextEntry={secureone}
          onRightPress={()=>setSecureone(!secureone)}
          rightIcon={secureone ? Images.Eye : Images.Hidden}

          // onChangeText={}
          // value={value}s
          // errorText={errorText}
        /> */}

        <Btn btnText={'Submit'}  onPress={submit}/>
      </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black',
  },
  main: {
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
    margin: 10,
  },
});

//make this component available to the app
export default Signup;
