import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Algebra from '../components/Algebra/Algebra';
import Finance from '../components/Finance/Finance';
import Health from '../components/Health/Health';
import CustomDrawerMenu from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Homr"
               drawerContent={(props) =><CustomDrawerMenu{...props}/>}
               
            >
                <Drawer.Screen name="Calculator" component={HomeScreen} />
                <Drawer.Screen name="Algebra" component={Algebra} />
                <Drawer.Screen name="Finance" component={Finance} />
                <Drawer.Screen name="Health" component={Health}  />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Navigation

