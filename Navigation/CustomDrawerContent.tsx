import {  DrawerContentScrollView,  DrawerItemList } from '@react-navigation/drawer'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const CustomDrawerContent :React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView { ...props} >
        <View style={styles.top_container} >
            <Icon  name='calculator' size={100} />
            <Text>All In One Calculator</Text>
        </View>
        <DrawerItemList  {...props} />

    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  top_container:{
    alignItems:"center",
    display:"flex",
    width:"100%", 
   },

 
  
})


export default CustomDrawerContent 

