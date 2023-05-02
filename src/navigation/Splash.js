import * as React from "react";
import { View } from "react-native";
import MyText from "../components/MyText";
import {Auth} from 'aws-amplify'
export default function Splash({setUsers,setIsLoading}) {

    React.useEffect(()=>{
       (async () => {
        try {
          const {atributes}=  await Auth.currentAuthenticatedUser();
            setUsers(atributes)
            setIsLoading(false)
            console.log(atributes)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
       }) 
    },[]);
    return(<View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
             <MyText type="title">Clock</MyText>
             <MyText type="title">Loading...</MyText>

           </View>)
    
}