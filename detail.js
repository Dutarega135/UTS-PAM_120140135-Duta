import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={require('./assets/profile-image.jpeg')} />
      <View style={styles.profileDetails}>
        <Text style={styles.name}>Duta Rega Rolindo Simorangkir</Text>
        <Text style={styles.nim}>120140135</Text>
        <Text style={styles.department}>Teknik Informatika</Text>
        <Text style={styles.university}>Institut Teknologi Sumatera</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileDetails: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  department: {
    fontSize: 18,
    marginBottom: 5,
  },
  Univeristy: {
    fontSize: 18,
    marginBottom: 5,
  },
  nim: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  }

})

export default ProfileScreen