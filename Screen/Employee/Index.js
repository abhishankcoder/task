import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const Employee = ({navigation}) => {
  const users = useSelector(state=>state.user)

  const renderItem=({item})=>{
    return(
      <View style={styles.itemView}>
        <Text style={styles.itemText}>Name : {item.name}</Text>
        <Text style={styles.itemText}>Age : {item.age}</Text>
        <Text style={styles.itemText}>Address : {item.adress}</Text>
        <Text style={styles.itemText}>City : {item.city}</Text>




      </View>
    )
  }
  return (
    <View>
      <FlatList
      data={users.data}
      renderItem={renderItem}
      keyExtractor={(item) => item.index}
      
      
      />

      {
        users.data.length <= 0 &&(
          <Text style={styles.notFound}>Data Not Found</Text>
        )
      }
    </View>
  )
}

export default Employee

const styles = StyleSheet.create({
itemView:{backgroundColor:'white',padding:15,borderRadius:12,borderColor:'grey',borderWidth:0.5,marginHorizontal:20,marginTop:10},
itemText:{fontSize:18,color:'black'},
notFound:{
  color:'red',
  fontSize:22,
  textAlign:'center'
}


})