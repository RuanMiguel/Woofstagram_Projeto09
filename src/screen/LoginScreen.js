import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// 1. Definição do esquema de validação
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  senha: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={{ email: '', senha: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          // Só entra aqui se os campos estiverem preenchidos corretamente
          console.log('Dados de login:', values);
          navigation.navigate('Main');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Bem-vindo!</Text>

            {/* Campo de Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.email && errors.email ? styles.inputError : null
                ]}
                placeholder="Digite seu email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            {/* Campo de Senha */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.senha && errors.senha ? styles.inputError : null
                ]}
                placeholder="Digite sua senha"
                value={values.senha}
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                secureTextEntry={true}
              />
              {touched.senha && errors.senha && (
                <Text style={styles.errorText}>{errors.senha}</Text>
              )}
            </View>

            {/* Botão Entrar chama o handleSubmit do Formik */}
            <TouchableOpacity 
              style={styles.buttonEntrar} 
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.buttonCriar} 
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.buttonText}>CRIAR CONTA</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
    // Ajuste para web ocupar a tela toda
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#FF3B30', // Borda vermelha se houver erro
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  buttonEntrar: {
    backgroundColor: '#3B82F6',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonCriar: {
    backgroundColor: '#10B981',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});