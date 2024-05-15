import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'black',
    },
    icon: {
      width: 100,
      height: 100,
      tintColor: 'green',
      margin: 20,
      alignSelf: 'center',
    },
    txt: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    main: {
      marginHorizontal: 20,
    },
    next: {
      width: 50,
      height: 50,
      tintColor: 'white',
      alignSelf: 'center',
      marginTop: 50,
    },
  });

  export default styles;