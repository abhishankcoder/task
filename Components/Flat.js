import {StyleSheet, Text, View, FlatList, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const Flat = props => {
  const {data} = props;
  const _renderItem = item => {
    const {onPressid} = props
    return (
      <View style={{margin:10}}>
        <TouchableOpacity activeOpacity={0.7} onPress={(e)=>onPressid(item.item.id)}>
          <View style={{backgroundColor:'#ed8f03',borderRadius:12,padding:30}}>
        <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>{item.item.title}</Text>
        </View>
        </TouchableOpacity>

      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        {...props}
      />
    </View>
  );
};

export default Flat;

const styles = StyleSheet.create({
  img: {
    width: 150, 
    height: 150, 
    borderRadius: 12,
     margin: 10
    },
});
