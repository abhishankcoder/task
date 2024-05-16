import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Images from '../../Constant/Images';
import {Black} from '../../Constant/Color';
import Btn from '../../Components/Btn';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/UserSlice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const onPressAdd = () => {
    if (!name || !age || !adress || !city) {
      setError('Please fill form first');
    } else {
      dispatch(addUser({name, age, adress, city}));
      setName('');
      setAdress('');
      setAge('');
      setCity('');
      setError('');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('user'));
      if (userData) {
        setEmail(userData.email);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View>
        <Text style={styles.userEmail}>User Profile : {email}</Text>

        <View style={{marginHorizontal: 10}}>
          <TextInput
            placeholderTextColor={Black}
            placeholder={'Name'}
            style={styles.inputStyle}
            onChangeText={val => setName(val)}
            value={name}
          />

          <TextInput
            placeholderTextColor={Black}
            placeholder={'Age'}
            keyboardType="numeric"
            style={styles.inputStyle}
            onChangeText={val => setAge(val)}
            value={age}
          />

          <TextInput
            placeholderTextColor={Black}
            placeholder={'Address'}
            style={styles.inputStyle}
            onChangeText={val => setAdress(val)}
            value={adress}
          />

          <TextInput
            placeholderTextColor={Black}
            placeholder={'City'}
            style={styles.inputStyle}
            onChangeText={val => setCity(val)}
            value={city}
          />
        </View>

        {error && <Text style={styles.error}>{error}</Text>}

        <View style={styles.btnView}>
          <Btn btnText={'Add Employee'} onPress={onPressAdd} />
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  size: {
    marginHorizontal: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Black,
    padding: 10,
    marginTop: 30,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  userEmail: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    marginTop: 20,
  },
});
