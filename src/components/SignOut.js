import * as React from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import MyText from "./MyText";
import {Button} from 'react-native'
import { AuthContext } from "../context/AuthContext";

export default function SignUp (){
    const {setAuthState,setEmail,setPassword,handleSigUp  } = React.useContext(AuthContext)
    return(
        <React.Fragment>
            <MyText type="title">Sign In</MyText>
            <MyInput label={"email"} onChangeText={setEmail}/>
            <MyInput label={"Password"}  onChangeText={setPassword} secureTextEntry/>
            <MyButton title={"Sign In"} onPress={handleSigUp}/>
            <Button title="Sign Up" onPress={()=> setAuthState("signIn")}/>


        </React.Fragment>
    );
}