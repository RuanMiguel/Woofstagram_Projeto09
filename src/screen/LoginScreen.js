import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  senha: Yup.string().min(6, 'Mínimo 6 caracteres').required('Obrigatório'),
});

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', senha: '' }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          try {
            const user = await AsyncStorage.getItem('user');

            if (!user) {
              Alert.alert('Erro', 'Nenhum usuário cadastrado');
              return;
            }

            const userData = JSON.parse(user);

            if (
              values.email === userData.email &&
              values.senha === userData.senha
            ) {
              navigation.navigate('Main');
            } else {
              Alert.alert('Erro', 'Email ou senha inválido');
            }

          } catch (error) {
            console.log('Erro no login:', error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.card}>

            <Text style={styles.title}>Login</Text>

            <TextInput
              style={[styles.input, touched.email && errors.email && styles.inputError]}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={[styles.input, touched.senha && errors.senha && styles.inputError]}
              placeholder="Senha"
              secureTextEntry
              value={values.senha}
              onChangeText={handleChange('senha')}
            />
            {touched.senha && errors.senha && (
              <Text style={styles.error}>{errors.senha}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.link}>Criar conta</Text>
            </TouchableOpacity>

          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#fff',
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  card: {
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    marginTop: 15,
  },
});