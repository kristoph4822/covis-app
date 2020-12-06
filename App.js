import { StatusBar } from 'react-native';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  state = {
    bluetoothDevices: [
      { name: 'Phone 1', key: '1' },
      { name: 'Phone 2', key: '2' },
      { name: 'Phone 3', key: '3' },
      { name: 'Phone 4', key: '4' },
      { name: 'Phone 5', key: '5' },
      { name: 'Phone 6', key: '6' },
      { name: 'Phone 7', key: '7' },
      { name: 'Phone 8', key: '8' },
      { name: 'Phone 9', key: '9' },
      { name: 'Phone 10', key: '10' },],
    wifiDevices: [
      { name: 'Phone 1', key: '1' },
      { name: 'Phone 2', key: '2' },
      { name: 'Phone 3', key: '3' },
      { name: 'Phone 4', key: '4' },
      { name: 'Phone 5', key: '5' },
      { name: 'Phone 6', key: '6' },
      { name: 'Phone 7', key: '7' },
      { name: 'Phone 8', key: '8' },
      { name: 'Phone 9', key: '9' },
      { name: 'Phone 10', key: '10' },]
  }

  render() {
    return (
      <View style={styles.container} >

        <View style={styles.header} >
          <Text style={styles.headerText} >CovIS mobile app</Text>
        </View>

        <View style={styles.list} >
          <View style={styles.listHeader} >
            <Text style={styles.listHeaderText} >List of nearby bluetooth devices</Text>
          </View>
          <ScrollView>
            {this.state.bluetoothDevices.map((item) => {
              return (
                <View key={item.key} >
                  <Text style={styles.listItem} >{item.name}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>

        <View style={styles.list} >
          <View style={styles.listHeader} >
            <Text style={styles.listHeaderText} >List of nearby Wi-Fi devices</Text>
          </View>
          <ScrollView>
            {this.state.wifiDevices.map((item) => {
              return (
                <View key={item.key} >
                  <Text style={styles.listItem} >{item.name}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>

        <StatusBar style="auto" />
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
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    height: '10%',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  list: {
    backgroundColor: '#e6ffff',
    width: '100%',
    height: '45%',
    padding: 20,
  },
  listHeader: {
    justifyContent: 'center',
  },
  listHeaderText: {
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  listItem: {
    paddingTop: 20,
  }
});
