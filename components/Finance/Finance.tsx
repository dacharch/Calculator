import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SalesTax from './financeActions/SalesTax'
import Tip from './financeActions/Tip'


const Finance = () => {
  const [switchComponent, setComponent] = useState("");

  const RenderComponent = () => {
       
        switch(switchComponent) {
            case "Sales Tax" : return <SalesTax onBack={()=>setComponent("")}/>
            case "Tip" : return <Tip onBack={()=>setComponent("")}/>
             
            default : return "" ;
        }
      
  }

  return (
    <View className='w-full h-[100%] bg-slate-300 flex flex-col p-3 '>
      {
        switchComponent == "" ?
          (
            <>
              <TouchableOpacity
                onPress={()=>setComponent("Sales Tax")}
                className='bg-white mt-[15%] border-solid rounded px-9 py-9'>

                <Text className='font-bold text-2xl  text-center'>Sales Tax</Text>
              </TouchableOpacity>

              

              <TouchableOpacity className='bg-white mt-[5%] border-solid rounded-md px-9 py-9'
                onPress={()=>setComponent("Tip")}
              >
                
                <Text className='font-bold text-2xl text-center'>
                  Tip
                </Text>
              </TouchableOpacity>
            </>

          ) : (
            <RenderComponent />
          )
      }

    </View>
  )
}

export default Finance
