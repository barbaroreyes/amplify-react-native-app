import * as React from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import MyText from "./MyText";
import {Button} from 'react-native'
import { AuthContext } from "../context/AuthContext";

export default function SignIn (){
    const {email,setEmail,setVerificationCode,handleConfirmSigUp  } = React.useContext(AuthContext)
    return(
        <React.Fragment>
            <MyText type="title">Sign In</MyText>
            <MyInput label={"email"} onChangeText={setEmail}/>
            <MyInput label={"Password"}  onChangeText={setVerificationCode} secureTextEntry/>
            <MyButton title={"Sign In"} onPress={handleConfirmSigUp }/>
            <Button title="Re-Sen-Code" />


        </React.Fragment>
    );
}