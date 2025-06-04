import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      {/* Curved Welcome & Login */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="example@email.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            placeholderTextColor="#999"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Text style={styles.showButton}>{secureText ? 'SHOW' : 'HIDE'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <View style={styles.logoPlaceholder} />
          <Text style={styles.footerText}>Scholars</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14122E',
    justifyContent: 'flex-end',
  },
  bottomCard: {
    backgroundColor: '#292946',
    borderTopLeftRadius:100,
    borderTopRightRadius:100,
    paddingHorizontal: 30,
    paddingTop: 90,
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 35,

  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
  },
  passwordContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  showButton: {
    color: '#888',
    fontWeight: 'bold',
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: '#24243E',
    paddingVertical: 17,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'90%',

    paddingHorizontal: 20,
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 5,
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    marginTop:70,
    alignItems: 'center',
    display:'flex',
    flexDirection:'row',
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius:10,
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
