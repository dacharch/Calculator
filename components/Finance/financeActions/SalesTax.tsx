import React, { useState } from 'react'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Dropdown } from 'react-native-element-dropdown'


const data =[
   {label:"Addition" ,value:1},
   {label:"Subtraction",value:2}
]

type BackProps = {
   onBack: () => void;
 };


const SalesTax = ({onBack}:BackProps) => {
  const [price,setPrice] = useState("") ;
  const [tax,setTax] =     useState("") ;
  const [value,setValue] = useState("Addition");
  const [result, setResult] = useState("Result here")  ;
  const [taxAmResult,settaxAmountResult] = useState("Tax Amount") ;
  

  const priceValue =(price:string) =>{
      setPrice(price) 
  }
  
  const percentValue = (percent:string)=>{
     setTax(percent) ;     
  }


  const calculate = ()=>{
    let pri = parseInt(price) ;
    let taxPer = parseInt(tax) ;
    
    if(value == "Addition"){
      let taxIncreaseAmount = (pri * taxPer)/100 ;  
      let result  = pri + taxIncreaseAmount ;
      setResult(result.toString())
      settaxAmountResult(taxIncreaseAmount.toString());
    }

    if(value =="Subtraction"){
      let taxIncreaseAmount = (pri * taxPer)/100 ;  
      let result  = pri - taxIncreaseAmount ;
      setResult(result.toString())
      settaxAmountResult(taxIncreaseAmount.toString());
    }
  }
  

  return (
      <View className='w-full h-[100%] p-2'>
          <Text className='text-center font-bold text-2xl'>Sales Tax</Text>
          <TextInput
             className=' rounded-md bg-white p-2 font-bold text-2xl mt-5'
             placeholder='Enter the Price'
             onChangeText={priceValue}
             keyboardType='numeric'
          />
          <TextInput
            className='rounded-md p-2 font-bold text-2xl mt-5 bg-white'
            placeholder='Enter the Tax'
            onChangeText={percentValue}
            keyboardType='numeric'
          />

          <Dropdown
             style={styles.dropdown}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}
             placeholder='Select Operation'
             data={data}
             labelField="label"
             valueField="value"
             onChange={item =>{
                setValue(item.label)
             }}
          />

          <Text
             className='font-bold text-2xl bg-white rounded-md p-2 mb-2'              
          >
            {result}
          </Text>
          <Text
             className='font-bold text-2xl bg-white rounded-md p-2'
          >
            {taxAmResult}          
          </Text>

          <TouchableOpacity onPress={calculate}>
             <Text className='text-center font-bold rounded-md mt-5 text-2xl bg-red-300 p-2 '>Calculate</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onBack}>
              <Text className='text-center font-bold rounded-md mt-5 bg-green-500 p-2 text-2xl'>Back</Text>
          </TouchableOpacity>
      </View>
  )
}

export default SalesTax


const styles = StyleSheet.create({

   dropdown :{
     margin:16,
     height:50,
     borderColor:"black"

   },

   placeholderStyle:{
      fontSize:25,
   },
   selectedTextStyle:{
       fontSize:20,
   },
   input:{
     height:50,
     width:"100%",
     borderRadius:5,
     borderWidth:5,
     padding:4,
     fontSize:20,
     marginBottom:30
   }
})