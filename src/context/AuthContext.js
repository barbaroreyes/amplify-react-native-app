import * as React from "react";
import {Auth} from 'aws-amplify'

const AuthContext = React.createContext({
    authState : 'signIn',
    setAuthState:() => {},
    email : "",
    setEmail:()=>{},
    password:'',
    setPassword:()=>{},
   verificationCode : "",
    setVerificationCode:()=>{},
   isLoading : false,
   handleSignIn :()=>{},
   handleSignUp:()=>{},
   handleConfirmSignUp:()=>{},
})

const  {Provider}  = AuthContext
function AuthProvider ({children}) {
    const [authState ,setAuthState] = React.useState('signIn')
    const [email ,setEmail] = React.useState("")
    const [password ,setPassword] = React.useState("")
    const [verificationCode ,setVerificationCode] = React.useState("")
    const [isLoading ,setIsLoading] = React.useState(false)


    async function handleSignIn (){
        if(!email || !password){
            alert("Please enter a valid  email and password")
            return;
        }
        try {
            setIsLoading(true)
            const user = await Auth.signIn({
                username: email,
                 password,
            })
            console.log("user signed in ")
            setAuthState("signedIn")
        } catch (e) {
            alert(e.message)
            setIsLoading(false)
        }
    }
    async function handleSignUp (){
        if(!email || !password){
            alert("Please enter a valid  email and password")
            return;
        }
        try {
            setIsLoading(true)
            const user = await Auth.signUp({
                username: email,
                 password
            })
            console.log("Confirm signUp ")
            setAuthState("signUp")
        } catch (e) {
            alert(e.message)
            setIsLoading(false)
        }
    }

    async function handleConfirmSignUp (){
        if(!verificationCode){
            alert("Please enter a verification Code ")
            return;
        }
        try {
            setIsLoading(true)
           await Auth.confirmSignUp({
                 email,
                 verificationCode
            })
            alert("Confirmed , You can Now sign In ")
            setAuthState("confirmSignup")
            setIsLoading(false)
        } catch (error) {
            alert(error.message)
            setIsLoading(false)
            console.log(error)
        }
    }


 return(
    <Provider value={{
        authState,
        setAuthState,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleSignUp,
        handleConfirmSignUp ,
        verificationCode,
        setVerificationCode,
        isLoading
    }}>
        {children}
    </Provider>
 )
}
export {AuthContext,AuthProvider} 