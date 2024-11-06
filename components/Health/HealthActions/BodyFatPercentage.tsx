import React, { useState } from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput } from 'react-native-gesture-handler'


const data = [
    {label:"Male", value: 1},
    {label:"Female", value: 2}
]

type BackProps = {
   onBack: () => void;
 };
const BodyFatPercentage = ({onBack}:BackProps) => {

  const [age,setAge] =    useState("") ;
  const [height,setHeight] = useState("") ;
  const [weight,setWeight] =useState("")  ;  
  const [gender,setGender] = useState("") ;
  const [ bodyFatResult, setBodyFatResult] =useState("") ;
 
  const ageFunction = (ageNumber:string)=>{
     setAge(ageNumber)
  }

  const heightFunction = (height:string) =>{
     setHeight(height) ;
  }

  const weightFunction = (weight:string) =>{
     setWeight(weight)  
  }
 
  const calculate = () =>{
    let  ageNumber = parseInt(age) ;
    let  heightNumber = parseInt(height) ;
    let  weightNumber = parseInt(weight) ;
    
 
    let heightSquare = heightNumber/100 ;
    heightSquare = heightSquare * heightSquare ;

    let bmi = weightNumber / heightSquare ;


    if(gender =="Male"){
       let bodyFat = (1.20 * bmi) + (0.23 * ageNumber)  - 16.2
       setBodyFatResult(bodyFat.toFixed(2).toString()) ;
    }
    if(gender == "Female"){
       let bodyFat = (1.20 *bmi) + (0.23 +ageNumber) - 5.4 ;
       setBodyFatResult(bodyFat.toFixed(2).toString()) ;
    }

  }

  return (
     <View className='w-full h-full'>
         <Text className="text-center font-bold text-2xl ">
              Body Fat Percentage 
         </Text>

         <TextInput
            className='bg-white rounded-md font-bold text-2xl p-2 mt-[5%]'
            placeholder='Enter the Age'
            keyboardType='numeric'   
            onChangeText={ageFunction}         
         />

         <TextInput
            className='bg-white rounded-md font-bold text-2xl p-2 mt-[5%]'
            placeholder='Enter the height'
            keyboardType='numeric'
            onChangeText={heightFunction}
         
         />

         <TextInput
            className='bg-white rounded-md font-bold text-2xl p-2 mt-[5%]'
            placeholder='Enter the Weight'
            keyboardType='numeric'
            onChangeText={weightFunction}
         
         />

         <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            labelField="label"
            valueField="value"
            placeholder='Select the Gender'
            onChange={item => {
                setGender(item.label)
            }}


         />


         <Text className='font-bold text-2xl text-center mt-[2%]'>{bodyFatResult}</Text>
         
         <TouchableOpacity onPress={calculate}>
             <Text className='text-center font-bold text-2xl bg-red-300 p-2 rounded-md mt-[2%]'>Calculate</Text>
         </TouchableOpacity>
          
          <TouchableOpacity onPress={onBack}>
              <Text className='text-center font-bold text-2xl bg-green-300 p-2 mt-5 '>Back</Text>
          </TouchableOpacity>
     </View>
  )
}

export default BodyFatPercentage

const styles = StyleSheet.create({
    dropdown: {
       margin:16,
       height:50,
       borderBottomColor:'gray',
       borderBottomWidth:0.5,
       borderColor:"black"
    },
    placeholderStyle:{
       fontSize:20
    },
    selectedTextStyle:{
       fontSize:16
    }

})
