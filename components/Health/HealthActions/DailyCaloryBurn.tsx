import React, { useState } from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native' ;
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';


const data = [
    {label: "Sedentary", value:1},
    {label:"Lightly Active",value:2},
    {label:"Moderately Active",value:3},
    {label:"Very Active",value:4}
]

const data2 = [
    {label:"Male", value:1},
    {label:"Femaile",value:2},
]


type BackProps = {
    onBack: () => void;
};

const DailyCaloryBurn = ({onBack}:BackProps) => {
 
 const [age,setAge] = useState("") ;
 const [height,setHeight] = useState("") ;
 const [weight,setWeight] = useState("") ;
 const [activity,setActivityValue] =useState("") ;
 const [gender,setGender] = useState("") ;
 const[resultCalorie,setCalorieResult] = useState("") ;
 

 const ageFunction = (age:string) =>{
     setAge(age)
 }

 const heightfunction = (height:string) =>{
     setHeight(height) ;
 }

 const weightfunction = (weight:string) =>{
     setWeight(weight) ;
 }

 

 const calculate = ()=>{
      let ageNumber = parseInt(age) ;
      let heightNumber = parseInt(height) ;
      let weightNumber = parseInt(weight) ;
      let bmr:number = 0 ;

      if(gender == "Male"){
         bmr = 88.326 + (13.397 * weightNumber) +(4.799 * heightNumber) - (5.677 * ageNumber)
      }

      if(gender == "Femaile"){
         bmr = 88.326 + (13.397 * weightNumber) +(4.799 * heightNumber) - (5.677 * ageNumber)         
      }

      if(activity == "Sedentary"){
          let result = bmr * 1.2 ;
          setCalorieResult(result.toFixed(2).toString()) ;
      }    
      if(activity == "Lightly Active"){
          let result = bmr * 1.375 ;
          setCalorieResult(result.toFixed(2).toString()) ;
      }
      if(activity == "Moderately Active"){
          let result = bmr * 1.55 ;
          setCalorieResult(result.toFixed(2).toString()) ;
      }

      if(activity == "Very Active"){
          let result = bmr * 1.55 ;
          setCalorieResult(result.toFixed(2).toString()) ;
      }
 }

 return (
   
   <View className="h-full w-full">
          <Text className="text-center font-bold text-2xl mt-[5%] "> Calory and Burn</Text>

          <TextInput
             className='bg-white rounded-md font-bold text-2xl p-2 mt-5'
             placeholder='Enter the Age'
             keyboardType='numeric'
             onChangeText={ageFunction}
          />
          <TextInput
             className='bg-white rounded-md font-bold text-2xl p-2 mt-5'
             placeholder='Enter the Height in cm'
             keyboardType='numeric'
             onChangeText={heightfunction}
          />

          <TextInput
             className='bg-white rounded-md font-bold text-2xl p-2 mt-5'
             placeholder='Enter the Weight'
             keyboardType='numeric'
             onChangeText={weightfunction}
          />       
          
         
          <Dropdown
             style={styles.dropdown}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}

             data={data2}

             labelField="label"
             valueField="value"
             placeholder='Select Gender'
             onChange={item=>{
                setGender(item.label)
             }}

          />
          <Dropdown
             style={styles.dropdown}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}
             data={data}
             labelField="label"
             valueField="value"
             placeholder='Select Percentage'
             onChange={item =>{
                  setActivityValue(item.label) ;
             }}
          />

          <Text className='rounded-md font-bold text-2xl p-2  text-center'>{resultCalorie}</Text>
          <TouchableOpacity onPress={calculate}>
               <Text className='bg-red-300 text-center font-bold  p-5 text-2xl  rounded-md'>Calculate </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onBack}>
              <Text className='text-center font-bold text-2xl bg-green-300 mt-2 p-2 rounded-md'>Back</Text>
          </TouchableOpacity>
    </View>
  )
}


export default DailyCaloryBurn

const styles = StyleSheet.create({
     dropdown: {
         margin: 5,
         height: 50,
         borderBottomColor:'gray',
         borderBottomWidth:0.5,
         borderColor: "black"
     },
     placeholderStyle:{
       fontSize:20,
     },
     selectedTextStyle:{
         fontSize:16
     },   
})