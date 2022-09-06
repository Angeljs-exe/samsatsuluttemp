import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts, LgGoogle} from '../../assets';
import {Button, CheckBoxx, Password, TextInput} from '../../components';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.titleWelcomeContainer}>
        <Text style={styles.textWelcome}>Hai, Selamat Datang! 👋</Text>
        <Text style={styles.subText}>
          Silahkan masuk dengan akun yang sudah anda buat
        </Text>
        <View style={styles.wrapperContent}>
          <TextInput title={'Nomor Telepon'} placeholder={'081234567890'} />
          <Password title={'Kata Sandi'} placeholder={'Masukkan kata sandi'} />
          <CheckBoxx />
          <Button title={'Masuk'} />
        </View>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.titleOr}>Atau</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.wrapperButtonGoogle}>
            <View style={styles.containerLgGoogle}>
              <LgGoogle />
              <View style={styles.titleGoogleContainer}>
                <Text style={styles.titleGoogle}>Masuk Dengan Akun Google</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.wrapperDaftarContainer}>
          <Text style={styles.wrapperDaftar}>Belum memiliki akun?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textDaftar}> Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleWelcomeContainer: {
    paddingVertical: 60,
    paddingHorizontal: 25,
  },
  textWelcome: {
    fontSize: 17,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  subText: {
    fontSize: 9,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
  },
  wrapperContent: {
    marginTop: 40,
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  line: {
    borderTopWidth: 0.5,
    borderColor: '#000000',
    width: 140,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  titleOr: {
    fontSize: 14,
    fontFamily: fonts.Poppins.semibold,
    color: '#999EA1',
  },
  wrapperButtonGoogle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    marginTop: 15,
  },
  containerLgGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleGoogleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleGoogle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginLeft: 8,
  },
  wrapperDaftarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 170,
  },
  wrapperDaftar: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#2E2E2E',
  },
  textDaftar: {
    fontFamily: fonts.Poppins.semibold,
    color: '#00ADF8',
  },
});
