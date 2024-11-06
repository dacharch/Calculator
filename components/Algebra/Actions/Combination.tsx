import React, { useState } from 'react'
import { Text,TouchableOpacity,View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


type BackProps ={
    onBack : () => void ;  
}

const Combination = ({onBack}:BackProps) => {



  const [result,setResult] = useState("Result") ;
  const[firstValue,setFirstValue] = useState('0') ;
  const[secondValue,setSecondValue] =useState('0') ;
  
  const firstNumber =(num:string) =>{
      setFirstValue(num)  ;
  }

  const secondNumber = (num:string) =>{
     setSecondValue(num)  ;
  }

  const calcluate = ()=>{
     let num = parseInt(firstValue) ;
     let num2 = parseInt(secondValue) ;
     let result = Math.pow(num,num2) ; 
     setResult(result.toString()) ;
 }

  return (
     <View className='p-5 w-full h-full bg-gray-300'>
         <Text className='text-center text-2xl mt-5 font-bold '>Combination & Permuatation</Text>
         
         <TextInput
            className='border rounded-md  mt-5 text-center font-bold text-2xl '
            placeholder='Value of N'
            keyboardType='numeric'
            onChangeText={firstNumber}
         />

         <TextInput
            className='border rounded-md mt-5 text-center font-bold text-2xl'
            placeholder='Value of R'
            keyboardType='numeric'
            onChangeText={secondNumber}
         />

         <Text className=' rounded-md mt-[5%] p-2 font-bold text-2xl text-center bg-green-800 text-white'>{result}</Text>
         <TouchableOpacity onPress={calcluate}>
            <Text className='mt-[10%]  rounded-md text-center p-2 font-bold text-2xl bg-red-500 text-white'>Calculate</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={onBack} >
              <Text className='rounded-md bg-green-500 mt-5 p-2 font-bold text-2xl text-center'>
                  Back
              </Text>
         </TouchableOpacity>
     </View>
  )
}

export default Combination
