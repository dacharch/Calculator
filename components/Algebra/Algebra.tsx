import React, { useState } from "react"
import { View, Text } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Percentage from "./Actions/Percentage";
import Average from "./Actions/Average";
import PrimeChecker from "./Actions/PrimeChecker";
import Combination from "./Actions/Combination";

function Algebra() {

    const [switchComponent, setComponent] = useState("");

    const RenderComponent = () => {
        switch (switchComponent) {
            case "Percentage": return <Percentage  />

            case "Average" : return <Average onBack ={() => setComponent("")}/>
 
            case "Prime Checker" : return <PrimeChecker onBack = {()=> setComponent("")}/>

            case "Combination": return <Combination onBack ={()=> setComponent("")}/>


            default: return "";
        }
    }


    return (
        <View className="border-solid bg-white-400 w-full h-full ">
            {
                switchComponent == "" ? (
                    <>
                    <ScrollView className="w-full bg-slate-300 flex flx-col p-3">
               

                        <TouchableOpacity className="bg-white mt-[15%] border-solid rounded px-9  py-9  "
                           onPress={()=>setComponent("Percentage")}
                        >
                             <Text className="font-bold text-2xl text-center">Percentage</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white mt-[5%] border-solid rounded-md px-9 py-9"
                           onPress={()=>setComponent("Average")}
                        >
                              <Text className="font-bold text-2xl text-center ">Average</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white mt-[5%] border-solid rounded-md px-9 py-9"
                            onPress={()=> setComponent("Prime Checker")}
                        >
                             <Text className="font-bold text-2xl text-center">Prime Checker</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white mt-[5%] border-solid rounded-md px-9 py-9 "
                           onPress={()=>setComponent("Combination")}
                        >
                             <Text className="font-bold text-2xl text-center">
                                Combination
                             </Text>
                        </TouchableOpacity>

                    </ScrollView>
                  
                    </>
                ) : (
                    <RenderComponent />
                )
            }
        </View>

    )
}

export default Algebra;