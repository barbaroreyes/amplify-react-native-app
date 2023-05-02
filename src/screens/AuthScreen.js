import * as React from "react";
import { View } from "react-native";
import SigIn   from '../components/SignIn'
import SigUp   from '../components/SignUp';
import ConfirmSignUp  from '../components/ConfirmSignUp';
import {AuthProvider,AuthContext } from '../context/AuthContext'
import SignIn from "../components/SignIn";

export default function Wrapper(){
    <AuthProvider>
        <Auth/>
    </AuthProvider>
}

function Auth(){
    const {authState} = React.useContext(AuthContext)
    console.log(authState)
    return (
    <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
         {authState ===" signIn" && <SignIn/>}
         {authState ===" signUp" && <SignUp/>}
         {authState ===" confirmSignup" && <ConfirmSignUp/>}
    </View>
    )
}