import * as React from "react";
import { View } from "react-native";
import SignIn   from '../components/SignIn'
import SignUp   from '../components/SignUp';
import ConfirmSignUp  from '../components/ConfirmSignUp';
import {AuthProvider,AuthContext } from '../context/AuthContext'


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
         {authState ===" signUp" && <SignUp />}
         {authState ===" confirmSignup" && <ConfirmSignUp/>}
    </View>
    )
}