
import React, { useState } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

type BackProps = {
   onBack: () => void;
 };

const Tip = ({onBack}:BackProps)  => {
  
  // Value State
  const [bill, setbillAmount] = useState("") ;
  const [peopleNumber, setPeopleNumber] = useState("") ;
  const [tipPrice, setTipPrice] = useState("") ;
  // Result State
  const [person,setPersonResult] =useState("Cost/Person") ;
  const [tip,setTipAmount] =useState("Tip Amount") ;
  const [result,setBillResult]=useState("Final Bill") ;

  const billAmountPrice = (price:string)=>{
       setbillAmount(price) ;
  }

  const peopleNumberSet = (people:string)=>{
     setPeopleNumber(people)
  }
  const tipNumber = (tip:string) =>{
      setTipPrice(tip) ;
  }
  const calculate = () =>{
     let billPrice = parseInt(bill) ;
     let people = parseFloat(peopleNumber) ;
     let tipPriceNumber = parseInt(tipPrice) ;

     let finalResult =  billPrice + (billPrice * tipPriceNumber) /100 ;
     setBillResult(finalResult.toString()) ;
     let personCost = finalResult/ people ;
     setPersonResult(personCost.toString())
     let tip = (billPrice * tipPriceNumber) /100 ;
     setTipAmount(tip.toString()) ;
   
  }
   

  return (
    <View className='w-full p-2'>
          <Text className='text-center font-bold text-2xl'> Tip</Text>
          <TextInput
              className='bg-white font-bold text-2xl rounded-md mt-2 p-2 mb-5'
              placeholder='Enter the Bill Amount'
              keyboardType='numeric'
              onChangeText={billAmountPrice}
          />

          <TextInput
             className='bg-white font-bold text-2xl rounded-md mt-2 p-2 mb-5'
             placeholder='Enter the People'
             keyboardType='numeric'
             onChangeText={peopleNumberSet}
          />

          <TextInput
             className='bg-white font-bold text-2xl rounded-md mt-2 p-2 mb-5'
             placeholder='Enter the Tip'
             keyboardType='numeric'
             onChangeText={tipNumber}
             
          />

          <Text className='border rounded-md font-bold text-2xl p-2 mt-2 mb-5'>{result}</Text>
          <Text className='border rounded-md font-bold text-2xl p-2 mb-2'>{person}</Text> 
          <Text className='border rounded-md font-bold text-2xl p-2 mb-2'>{tip}</Text>
    
          <TouchableOpacity
             onPress={calculate}
          >
             <Text className=' bg-red-300 font-bold text-2xl text-center p-2 rounded-md '>Calculate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onBack}>
               <Text className="bg-green-300 font-bold text-2xl text-center p-2 rounded-md mt-2">Back</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Tip
