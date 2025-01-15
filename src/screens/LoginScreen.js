// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { mockUsers } from '../constants/mockUsers';
import CustomButton from '../components/CustomButton';
import theme from '../styles/theme';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = () => {
    // 1) Basic validation
    if (!username || !password) {
      setErrorMsg('Please enter username and password');
      return;
    }

    // 2) Check mock users
    const userFound = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!userFound) {
      setErrorMsg('Invalid credentials');
      return;
    }

    // 3) Navigate to Home, passing user name
    setErrorMsg('');
    navigation.navigate('Home', { userName: userFound.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bhookh App</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={theme.COLORS.backgroundLight}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={theme.COLORS.backgroundLight}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

      <CustomButton
        title="Login"
        onPress={handleLogin}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.background,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    ...theme.FONTS.heading1,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.COLORS.backgroundLight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: theme.FONTS.body2,
    color: theme.COLORS.text,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 4,
    ...theme.FONTS.body2,
  },
});
