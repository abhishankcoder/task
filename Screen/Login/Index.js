import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Images from '../../Constant/Images';
import Strings from '../../Constant/Strings';
import Btn from '../../Components/Btn';
import Inputext from '../../Components/Inputext';
import { White, Black } from '../../Constant/Color';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {

  useEffect(() => {
    getUser();
  }, [])


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');






  const onPressLogin = () => {
    if (!email || !password) {
      setError('Please fill both fields')
    } else {
      setDataAsyc();
      loginApiCall();
      setError('')
    }
  }

  const setDataAsyc = async () => {
    const data = {
      email: email,
      password: password
    }
    try {
      await AsyncStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem("user"))
      if (userData) {
        navigation.navigate('Home')

      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginApiCall = () => {
    axios.post('https://reqres.in/api/login ', {
      email: email,
      password: password,
    })
      .then((response) => {
        navigation.navigate('Home')

      }, (error) => {
        navigation.navigate('Home')

      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Strings.Login}</Text>
      <View style={{ marginHorizontal: 10 }}>
        <TextInput
          placeholderTextColor={Black}
          placeholder={Strings.Email}
          style={styles.inputStyle}
          onChangeText={(val) => setEmail(val)}
          value={email}
        />


        <TextInput
          placeholderTextColor={Black}
          placeholder={Strings.Password}
          style={styles.inputStyle}
          onChangeText={(val) => setPassword(val)}
          value={password}
        />


        {
          error && (
            <Text style={styles.errorText}>{error}</Text>
          )
        }
      </View>
      <View style={styles.btnView}>
        <Btn
          btnText={Strings.Login}
          onPress={onPressLogin}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  main: {
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: '800',
    margin: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Black,
    padding: 10,
    marginTop: 30
  },
  btnView: { flex: 0.4, justifyContent: 'flex-end' },
  errorText: { color: 'red', textAlign: 'center', marginTop: 20 }
});
