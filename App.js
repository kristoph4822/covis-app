import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header} >
          <Text style={styles.headerText} >CovIS mobile app</Text>
        </View>
        <View style={styles.body} >
          <Text>List of nearby bluetooth devices</Text>

        </View>
        <View style={styles.body} >
          <Text>List of nearby Wi-Fi devices</Text>
          
        </View>
      </View>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>CovIS mobile app</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ccffff',
    // padding: 20,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  body: {
    backgroundColor: '#e6ffff',
    width: '100%',
    padding: 20,
  }
});
