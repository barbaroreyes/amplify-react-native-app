import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native'
import {Amplify ,Auth} from 'aws-amplify'
import awsConfi from './src/aws-exports'
import SignIn from './src/components/SignIn';

Amplify.configure(awsConfi)

const App = () => {
  const signOut = async()=>{
    try {
      await Auth.signOut()
    } catch (error) {
      
    }

  }
  return (
    <View style={styles.container}>
     <SignIn/>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
