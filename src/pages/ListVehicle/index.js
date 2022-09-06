import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const ListVehicle = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header
        title="Tambah Kendaraan"
        onBack={() => navigation.navigate('Dashboard')}
      />
      <View>
        <Text>ListVehicle</Text>
      </View>
    </SafeAreaView>
  );
};

export default ListVehicle;

const styles = StyleSheet.create({});
