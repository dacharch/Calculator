import React, { useState } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


type BackProps = {
   onBack: () => void;
};

const BodyMassIndex = ({onBack}:BackProps) => {

  const [height,setHeight]= useState("") ;
  const [weight,setWeight] = useState("") ;
  const  [bmiResult,setBMIResult] = useState("") ;



  const bodyHeight = (hg:string)=>{
       setHeight(hg)     
  }

  const bodyWeight =(wg:string)=>{
        setWeight(wg)
  }


  const calculate = ()=>{
     let hg = parseInt(height) ;
     let we = parseInt(weight) ;
     let heightMeter = hg/100 ;
     let squareMeter = heightMeter*heightMeter ;
     let bmi = we/squareMeter ;
     setBMIResult(bmi.toFixed(2).toString()) ;

  }


  return (
     <View className='w-full h-full'>
         <Text className='text-center font-bold text-2xl '>
              Body Mass Index
         </Text>

         <TextInput
            className='text-center font-bold text-2xl  rounded-md mt-5 bg-white'
            placeholder='Enter the Height in cm'
            keyboardType='numeric'
            onChangeText={bodyHeight}
          
         />
         <TextInput
            className='text-center font-bold text-2xl bg-white rounded-md mt-5'
            placeholder='Enter the Weight'
            keyboardType='numeric'
            onChangeText={bodyWeight}

         />
         <Text className="  mt-5 text-center font-bold text-2xl p-5 rounded-md  ">{"BMI Result "+bmiResult}</Text>
         <TouchableOpacity onPress={calculate}>
             <Text className='text-center font-bold text-2xl bg-red-300 p-5 rounded-md '>Calculate</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={onBack}>
              <Text className='text-center font-bold text-2xl bg-green-300 p-5 rounded-md mt-2'>Back</Text>

         </TouchableOpacity>
     </View>
  )
}

export default BodyMassIndex
