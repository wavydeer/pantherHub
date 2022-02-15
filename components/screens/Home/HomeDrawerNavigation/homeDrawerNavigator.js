import {createDrawerNavigator} from "@react-navigation/drawer"
import HomeScreen from "..";
import colors from "../../../../assets/Colors";
import ProfileScreen from "../../Profile";
import SettingsScreen from "../../Settings";

const Drawer = createDrawerNavigator()

const homeDrawerNavigator = () =>{
    return(
        <Drawer.Navigator drawerContentOptions={{activeTintColor : colors.white}}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, drawerLabel : 'Profile'}}/>
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{headerShown: false, drawerLabel :'Settings'}} />
        </Drawer.Navigator>
    )
    

}

export default homeDrawerNavigator;