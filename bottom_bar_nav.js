import react from "react";
import { View, Text ,StyleSheet,Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

 
const  Home =()=>{
    <View style={styles.main}>
        <Text style={styles.text} >Home Screen</Text>
    </View>
};

const Events=()=>{
    return(
    <View style={styles.main}>
        {/* <Text style={styles.text}>Events</Text> */}
        <Image source={require("./assets/shiva.png")}></Image>
    </View>
    )
};

const Movies=()=>{
    <View style={styles.main}>
        {/* <Text style={styles.text}>Movies</Text> */}
        <Image source={require("./assets/shiva.png")}></Image>
        <Image source={require("./assets/shiva.png")}></Image>

    </View>

    
    
}

const Tab =createBottomTabNavigator();

export default function Bottom() {
    return(
            <NavigationContainer>
                    <Tab.Navigator
                    screenOptions={({route})=>({
                            tabBarIcon:({focused,color,size})=>{
                                let iconName;

                                if(route.name === "Home"){
                                    iconName =   'home' ;
                                }
                                else if(route.name === 'Events'){
                                    iconName = 'event';
                                }else if(route.name === 'Movies'){
                                    iconName =   'movie' ;
                                }

                                return <Icon name={iconName} size={size} color={color}/>
                            },
                            tabBarActiveTintColor:'tomato',
                            tabBarInactiveTintColor:'gray',
                    })}
                    >
                        <Tab.Screen name="Home" component={Home}/>
                        <Tab.Screen name="Events" component={Events}/>
                        <Tab.Screen name="Movies" component={Movies}/>

                    </Tab.Navigator>
            </NavigationContainer>
    );
};

const styles =StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
     text:{
        fontSize:20,
        fontWeight:'bold',
     },
})
