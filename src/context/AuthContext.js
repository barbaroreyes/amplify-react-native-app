import * as React from "react";
import {Auth} from 'aws-amplify'

const AuthContext = React.createContext({
    authState : 'signIn',
    setAuthState:() => {},
    email : "",
    setEmail:()=>{},
   verificationCode : "",
    setVerificationCode:()=>{},
   isLoading : false,
   handleSigIn :()=>{},
   handleSigUp :()=>{},
   handleConfirmSigUp :()=>{},
})

