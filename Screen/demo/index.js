import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';

const Demo = () => {
  const [timeout, setTimeout] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getLastErrorMessage = async () => {
      try {
        const lastError = await AsyncStorage.getItem('lastErrorMessage');
        if (lastError) {
          setErrorMessage(lastError);
        }
      } catch (e) {
        console.error('Failed to load last error message.');
      }
    };

    getLastErrorMessage();
  }, []);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        timeout: parseInt(timeout) * 1000,
      });

      if (!response.data) {
        throw new Error('Improper JSON response');
      }
      console.log(response.data);
      setErrorMessage('');
      await AsyncStorage.removeItem('lastErrorMessage');
    } catch (error) {
      const errorMsg = error.response
        ? `HTTP status code: ${error.response.status}`
        : error.message;
      setErrorMessage(errorMsg);
      await AsyncStorage.setItem('lastErrorMessage', errorMsg);
    }
  };

  return (
    <View style={styles.container}>
      <Text>API Timeout (seconds):</Text>
      <TextInput
        style={styles.input}
        value={timeout}
        onChangeText={setTimeout}
        keyboardType="numeric"
      />
      <Button title="Hit API" onPress={handleButtonClick} />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginTop: 12,
  },
});

export default Demo;