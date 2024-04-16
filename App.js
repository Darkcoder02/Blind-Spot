import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.cameraContainer}>

      </View>
      
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityLabel={'Text Mode'}
          onPress={() => {
            console.log('Hello')
          }}
        >
          <Ionicons name="book-outline" size={50}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityLabel={'Currency Mode'}
          onPress={() => {
            console.log('Hello')
          }}
        >
          <Ionicons name="cash-outline" size={50}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityLabel={'Walking Mode'}
          onPress={() => {
            console.log('Hello')
          }}
        >
          <Ionicons name="walk-outline" size={50}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityLabel={'Face Mode'}
          onPress={() => {
            console.log('Hello')
          }}
        >
          <Ionicons name="person-outline" size={50}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly'
  },
  cameraContainer: {
    backgroundColor: 'black',
    height: 500,
    width: 500
  },
  btnContainer: {
    flexDirection: "row",
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-around',

  }
});
