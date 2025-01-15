import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../styles/theme';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Welcome to Bhook</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    color: COLORS.background,
    fontSize: SIZES.heading1,
    fontFamily: FONTS.bold,
    marginTop: 20,
  },
});
