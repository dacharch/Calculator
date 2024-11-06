import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BodyFatPercentage from './HealthActions/BodyFatPercentage';
import BodyMassIndex from './HealthActions/BodyMassIndex';
import DailyCaloryBurn from './HealthActions/DailyCaloryBurn';

const Health = () => {
 const [switchComponent,setComponent] =useState("") ;
 const RenderComponent = ()=>{

     switch(switchComponent){
        case "Body Mass Index" : return <BodyMassIndex onBack ={()=>setComponent("")}/>

        case "Daily Caloric Burn": return <DailyCaloryBurn onBack = {()=>setComponent('')}/>

        case "Body Fat Percentage" : return <BodyFatPercentage onBack = {()=>setComponent("")}/>

        default: return "" ;
     }
    
 }

 return (
      <View className="w-full h-full bg-slate-300 flex flex-col  p-3">
        {
           switchComponent == ""?
           (
             <>
                <TouchableOpacity   
                   onPress={()=>setComponent("Body Mass Index")}                
                   className='bg-white mt-[15%] border-solid rounded px-9 py-9'
                >
                  <Text className='font-bold text-2xl text-center'>Body Mass Index</Text>
                </TouchableOpacity>

                <TouchableOpacity                   
                   className='bg-white mt-[15%] border-solid rounded px-9 py-9'
                   onPress={()=>setComponent("Daily Caloric Burn")}
                >
                  <Text className='font-bold text-2xl text-center'>Daily Caloric Burn</Text>
                </TouchableOpacity>

                <TouchableOpacity  
                   onPress={()=>setComponent("Body Fat Percentage")}                 
                   className='bg-white mt-[15%] border-solid rounded px-9 py-9'
                >
                  <Text className='font-bold text-2xl text-center'>Body Fat Percentage</Text>
                </TouchableOpacity>


             </>
           ):(
               <RenderComponent/>
           )
        }
          
      </View>
  )
}

export default Health
