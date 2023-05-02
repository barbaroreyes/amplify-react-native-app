import * as React from "react";
import {withAuthenticator} from 'aws-amplify-react-native'
import {Amplify ,Auth,Hub} from 'aws-amplify'
import awsConfi from './src/aws-exports'
import AuthScreen from './src/screens/AuthScreen'
import Splash from './src/navigation/Splash'
import Root  from './src/navigation/Root'

Amplify.configure(awsConfi);

export default function App (){
const [user,setUsers] = React.useState(null)
const [isLoading,setIsLoading] = React.useState(true);

const listener = (data) => {
  switch(data.payload.event){
    case "signIn":
      const {attributes} = data.payload.data;
      console.log(attributes);
      setUsers(attributes);
      console.log('user,sign  from hub');
      break;
      case "signOut":
        setUsers(null);
        console.log('user,sign out');
        default:
          break;	


  }

}
Hub.listen('auth',listener);
if(isLoading) return <Splash setUsers={setUsers} setIsLoading={setIsLoading}/>
return user ? <Root/>: <AuthScreen/>

}  
  
 



