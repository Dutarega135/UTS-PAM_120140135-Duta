import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from "./List";
import Detail from "./detail"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Tugas UTS PAM</Text>
      <Button
        title="DAFTAR SEKOLAH DI UNITED KINGDOM"
        onPress={() => navigation.push('List')}
      />
      
      <Button
        title="PROFILE MAHASISWA"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Detail} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;