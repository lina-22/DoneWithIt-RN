import {
  StatusBar
} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {
  return ( 
    <View style = { styles.container} >
    <Text> Open up App.js to start working on your app lina! HELLLLO </Text>
    <Text style = { styles.welcome}>Welcome to my first native ios app!!!</Text>
     <StatusBar style = "auto" / >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    
    backgroundColor: 'red',
    color:'white',
    fontSize:'50px'
    
  },
});