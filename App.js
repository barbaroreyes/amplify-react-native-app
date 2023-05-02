import * as React from "react";
import {withAuthenticator} from 'aws-amplify-react-native'
import {Amplify ,Auth,Hub} from 'aws-amplify'
import awsConfi from './src/aws-exports'
import AuthScreen from './src/screens/AuthScreen'
import Splash from './src/navigation/Splash'
import Root  from './src/navigation/Root'

Amplify.configure(awsConfi)

export default function App (){
const [user,setUsers] = React.useState(null)
const [isLoading,setIsLoading] = React.useState(true)
if(isLoading) return <Splash setUsers={setUsers} isLoading={setIsLoading}/>
return user ? <Root/>: <AuthScreen/>

}  
  
 



