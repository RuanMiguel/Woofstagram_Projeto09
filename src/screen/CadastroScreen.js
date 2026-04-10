import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputWithLabel from '../components/InputWithLabel';

const cadastroSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  senha: Yup.string().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória'),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref('senha'), null], 'As senhas não conferem')
    .required('Confirme sua senha'),

  dataNascimento: Yup.string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Use o formato DD/MM/AAAA'
    )
    .required('Data é obrigatória'),

  nomePet: Yup.string().required('Nome do pet é obrigatório'),
  raca: Yup.string().required('Raça é obrigatória'),
  brinquedo: Yup.string().required('Brinquedo obrigatório'),
});

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          senha: '',
          confirmarSenha: '',
          nomePet: '',
          dataNascimento: '',
          raca: '',
          brinquedo: ''
        }}
        validationSchema={cadastroSchema}
        onSubmit={async (values) => {
          try {
            await AsyncStorage.setItem('user', JSON.stringify(values));
            navigation.navigate('SignIn');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.card}>

              <InputWithLabel label="Email" value={values.email} onChangeText={handleChange('email')} error={touched.email && errors.email} />

              <InputWithLabel label="Senha" secureTextEntry value={values.senha} onChangeText={handleChange('senha')} error={touched.senha && errors.senha} />

              <InputWithLabel label="Confirmar Senha" secureTextEntry value={values.confirmarSenha} onChangeText={handleChange('confirmarSenha')} error={touched.confirmarSenha && errors.confirmarSenha} />

              {/* 🔥 CAMPO DATA FORMATADO */}
              <InputWithLabel
                label="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                value={values.dataNascimento}
                onChangeText={(text) => {
                  let cleaned = text.replace(/\D/g, '');

                  if (cleaned.length > 2) cleaned = cleaned.slice(0,2) + '/' + cleaned.slice(2);
                  if (cleaned.length > 5) cleaned = cleaned.slice(0,5) + '/' + cleaned.slice(5,9);

                  handleChange('dataNascimento')(cleaned);
                }}
                error={touched.dataNascimento && errors.dataNascimento}
              />

              <InputWithLabel label="Nome do Pet" value={values.nomePet} onChangeText={handleChange('nomePet')} error={touched.nomePet && errors.nomePet} />

              <InputWithLabel label="Raça" value={values.raca} onChangeText={handleChange('raca')} error={touched.raca && errors.raca} />

              <InputWithLabel label="Brinquedo" value={values.brinquedo} onChangeText={handleChange('brinquedo')} error={touched.brinquedo && errors.brinquedo} />

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.link}>Já tenho conta</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', height: Platform.OS === 'web' ? '100vh' : 'auto' },
  scroll: { flexGrow: 1, padding: 20 },
  card: { maxWidth: 400, alignSelf: 'center', width: '100%' },
  button: { backgroundColor: '#3B82F6', padding: 15, borderRadius: 12, marginTop: 20 },
  buttonText: { color: '#fff', textAlign: 'center' },
  link: { textAlign: 'center', marginTop: 15 }
});