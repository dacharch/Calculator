

import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';



type BackProps = {
    onBack: () => void;
};
 
const data = [
    { label: "Discount", value: 1 },
    { label: "Compound Interest", value: 2 },
    { label: "Percent of Value", value: 3 },
    { label: "Debt/Mortage", value: 4 }
]


const Discount = ()=>{

     const [discountPrice, setDiscount] = useState('') ;
     const [itemPrice,setItemPrice] = useState('') ;
     const [output,setOutput] = useState("Output")


     const setItemPriceValue = (priceValue:any)=>{
          setItemPrice(priceValue) ;
     }

     const setDiscountPrice =(discountValue:any) =>{
         setDiscount(discountValue) ;
     }

     const calculateDiscount = ()=>{
          let disPrice =  parseFloat(discountPrice) ;
          let itemValue = parseFloat(itemPrice) ;


        
          let result = itemValue  * (disPrice /100) ;
          setOutput(result.toString()) ;

     }

     return(
         <View >
             <Text className='text-center text-2xl font-bold mb-5'>Item Price </Text>
             <TextInput
              placeholder='Item Price'
              style={styles.input}
              onChangeText={setItemPriceValue}
              keyboardType='numeric'
             />
             <Text className='text-center text-2xl font-bold mb-5 mt-5'>Discount </Text>

             <TextInput
                placeholder='Discount Price'
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setDiscountPrice}
             />

             <TouchableOpacity 
                onPress={calculateDiscount}
             >
                <Text className='text-center mt-5 bg-green-300 font-bold text-2xl p-5  rounded-md '>Calculate</Text>
             </TouchableOpacity>

             <Text className='bg-green-700 mt-5  w-full rounded-md text-white text-center p-5 text-2xl font-bold'>
                {output}
              </Text>

         </View>
     )
}

const CompoundInterest = ()=>{
     const[amount,setAmount] = useState('') ;
     const[interest,setInterest] = useState('') ;
     const[year, setYears] = useState('') ;
     const[output, setOutput] = useState("Total")  ;

     

       const amountSet = (amountValue:any)=>{
        setAmount(amountValue)  ;

     }

     const addInterest = (interest:any) =>{
         setInterest(interest) ;
     }

     const addYear = (year:any) =>{
         setYears(year) ;
     }

     const calculateInterest = () =>{
          let netAmount = parseInt(amount) ;
          let interestRate= parseInt(interest) ;
          let ye = parseInt(year) ;
          let payableInterest = (netAmount * interestRate)/100 ;
          let result = netAmount +(ye * payableInterest) ;
          setOutput(result.toString()) ;
     }


     return(
         <View className='p-2 h-full w-full'>
             <Text className='text-2xl font-bold text-center mb-4'>Compound Interest</Text>
             <TextInput
               style={styles.input}  
               placeholder='Orginial Amount'
               keyboardType='numeric'
               onChangeText={amountSet}
               
             />

             <TextInput
                style={styles.input}
                placeholder='Interest'
                keyboardType='numeric'
                onChangeText={addInterest}
             />

             <TextInput
                style={styles.input}
                placeholder="Year"
                keyboardType='numeric'
                onChangeText={addYear}
             />
        
             <Text className="bg-green-700 text-center font-bold text-white p-1 rounded-md text-xl ">                 
                 {output}
             </Text>
             
             <TouchableOpacity onPress={calculateInterest}>
                 <Text className='text-center mt-2 bg-red-300 font-bold text-xl p-1 rounded-md text-white'>
                    Calculate
                 </Text>
             </TouchableOpacity>


     
         </View>   
     )
}

const Debt = ()=>{

     const [debt,setdebtAmount] = useState('') ;
     const [interestRate,setInterestRate] =useState('');
     const [year,setYears] = useState('') ;
     const [monthly,setMonthly] = useState('Monthly Interest') ;
     const [total, setTotal] = useState('Total Interest')


    
     const debtAmount = (debt:any)=>{
        setdebtAmount(debt) ;
     }
    

     const YearsSet = (year:any)=>{
         setYears(year) ;
     }

     const interestRateSet = (interestValue:any)=>{
          setInterestRate(interestValue) ;
     }
    
     

     const calculate  = ()=>{

        let debtPrice = parseInt(debt) ;
        let interPrice = parseInt(interestRate) ;
        let yearValue = parseInt(year) ;

        let monthlyInterest =  (debtPrice * interPrice)/100;
        let totalInterest = monthlyInterest* yearValue ;
        setMonthly(monthlyInterest.toString());   
        setTotal(totalInterest.toString()) ;

     }

     return(
         <View className='p-2 '>
              <Text className='text-center font-bold text-2xl mb-5'>
                 Debt/Mortage
              </Text>
              
              <TextInput
                style={styles.input}
                placeholder='Debt Amount'
                onChangeText={debtAmount}
              />

              <TextInput
                style={styles.input}
                placeholder='Interest Rate'
                onChangeText={interestRateSet}
              />

                    
              <TextInput
                style={styles.input}
                placeholder='Years'
                onChangeText={YearsSet}
              />
            
              <Text className=' rounded-md bg-green-900 text-white text-center p-2 font-bold text-2xl'>
                  {monthly}
              </Text>
              <Text className='w-full  rounded-md bg-green-900 text-white text-center p-2 font-bold text-2xl mt-2'>
                  {total}
              </Text>  
            
             
            <TouchableOpacity onPress={calculate}>
              <Text className='bg-red-900 text-white text-center p-2 mt-2  rounded-md font-bold text-2xl'>
                  Calculate 
              </Text>
            </TouchableOpacity>
           



         </View>
     )
}


const PercentValue = () =>{
      const [currentValue,setCurrentValue] = useState("") ;
      const [percentageValue,setPercentValue] = useState('') ;
      const [result,setResult] = useState("Result") ;


      const muchValue = (value:any)=>{
         setCurrentValue(value)
      }

      const percentValue = (percent:any) =>{
          setPercentValue(percent)
      }

      const calculate = ()=>{
        let  value = parseInt(currentValue) ;
        let per = parseInt(percentageValue) ;
        let result = (value * per) ;
        setResult(result.toString())

      }

      return(
         <View className='p-2'>
             <Text className='text-center font-bold text-2xl mb-2'>
                Percent of Value
             </Text>

             <TextInput
               style={styles.input}
               placeholder='How much is?'
               onChange={muchValue}
             />
             <Text className='text-center text-bold text-2xl mb-2 '>Of</Text>

             <TextInput
               style={styles.input}
               placeholder='Percentage Value'
               onChange={percentValue}
             />
             <Text className='text-center font-bold text-2xl bg-green-600 p-2 rounded-md text-white '>
                {result}
            </Text>
            <TouchableOpacity onPress={calculate}>
                 <Text className='text-center mt-2 bg-red-500 p-2 rounded-md font-bold text-2xl text-white'>Calculate</Text>
            </TouchableOpacity>


         </View>
      )
}

function Percentage() {
    const [value,setValue] = useState("Discount") ;

    const render = ()=>{
         switch(value) {
             case "Discount":  return <Discount/> ;

             case "Compound Interest" : return <CompoundInterest/>

             case "Debt/Mortage" : return <Debt/>
             case "Percent of Value" : return <PercentValue/>
                    
             default: return "" ;
         }
    }
    

    return (
        <View className='w-full h-[100%]'>
            <Text className='text-center font-bold text-2xl mt-[3%]'>Percentage Calculator</Text>
            <View>
               <Dropdown   
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data} 
                  labelField="label"
                  valueField="value" 
                  placeholder="Select Percentage"
                  onChange={item => {
                     setValue(item.label) ;
                  }}
                />
            </View>
            <View className='m-2 border-solid '>
                 {
                     render() 
                 }
            </View>
        </View>
    )
}

export default Percentage;

const styles  = StyleSheet.create({
     
     dropdown :{
        margin:16,
        height:50,
        borderBottomColor:'gray',
        borderBottomWidth:0.5,
        borderColor:"black"
     },
     placeholderStyle:{
         fontSize:20,
     },
     selectedTextStyle:{
         fontSize:16 
     },

     input:{
        height:50,
        width:"100%",
        borderRadius:5,
        borderWidth:1,
        padding:4,
        fontSize:20,
        marginBottom:30
        

     },
    
})