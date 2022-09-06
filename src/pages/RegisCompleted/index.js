import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, IconRegisCompleted} from '../../assets';
import {Button} from '../../components';

const RegisCompleted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.regisCompletedContainer}>
        <IconRegisCompleted />
        <View style={styles.titleCompletedContainer}>
          <Text style={styles.titleCompleted}>
            Selamat Kendaraan Anda Telah Terdaftar.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContiner}>
        <Button
          title="Beranda"
          onPress={() => navigation.replace('Dashboard')}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisCompleted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  regisCompletedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 156.14,
  },
  titleCompletedContainer: {
    marginTop: 60,
  },
  titleCompleted: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
    width: 216,
    textAlign: 'center',
  },
  buttonContiner: {
    paddingHorizontal: 25,
    marginTop: 128.5,
  },
});
