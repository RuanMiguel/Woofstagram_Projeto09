import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Platform, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputWithLabel from '../components/InputWithLabel.js';

// 1. Esquema de Validação: Define o que é obrigatório
const cadastroSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  senha: Yup.string().min(6, 'A senha deve ter 6+ caracteres').required('Senha obrigatória'),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref('senha'), null], 'As senhas não conferem')
    .required('Confirme sua senha'),
  nomePet: Yup.string().required('Nome do pet é obrigatório'),
  dataNascimento: Yup.string().required('Data é obrigatória'),
  raca: Yup.string().required('Raça é obrigatória'),
  brinquedo: Yup.string().required('Brinquedo favorito é obrigatório'),
});

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
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
        onSubmit={(values) => {
          // Só executa se passar em todas as validações acima
          console.log('Cadastro realizado:', values);
          navigation.navigate('Main');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <ScrollView 
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.card}>
              

              <InputWithLabel
                label="E-mail"
                placeholder="exemplo@email.com"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
              />

              <InputWithLabel
                label="Senha"
                placeholder="Mínimo 6 caracteres"
                secureTextEntry
                value={values.senha}
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                error={touched.senha && errors.senha}
              />

              <InputWithLabel
                label="Confirmar Senha"
                placeholder="Repita a senha"
                secureTextEntry
                value={values.confirmarSenha}
                onChangeText={handleChange('confirmarSenha')}
                onBlur={handleBlur('confirmarSenha')}
                error={touched.confirmarSenha && errors.confirmarSenha}
              />

              <InputWithLabel
                label="Nome do Pet"
                placeholder="Nome do seu bichinho"
                value={values.nomePet}
                onChangeText={handleChange('nomePet')}
                onBlur={handleBlur('nomePet')}
                error={touched.nomePet && errors.nomePet}
              />

              <InputWithLabel
                label="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                value={values.dataNascimento}
                onChangeText={handleChange('dataNascimento')}
                onBlur={handleBlur('dataNascimento')}
                error={touched.dataNascimento && errors.dataNascimento}
              />

              <InputWithLabel
                label="Raça"
                placeholder="Qual a raça?"
                value={values.raca}
                onChangeText={handleChange('raca')}
                onBlur={handleBlur('raca')}
                error={touched.raca && errors.raca}
              />

              <InputWithLabel
                label="Brinquedo Favorito"
                placeholder="O que ele mais gosta?"
                value={values.brinquedo}
                onChangeText={handleChange('brinquedo')}
                onBlur={handleBlur('brinquedo')}
                error={touched.brinquedo && errors.brinquedo}
              />

              {/* Botão de Envio */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>CADASTRAR PET</Text>
              </TouchableOpacity>

              {/* Botão Voltar */}
              <TouchableOpacity 
                style={styles.btnVoltar} 
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.btnVoltarText}>Já tenho conta. Voltar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // Garante altura total no navegador
    height: Platform.OS === 'web' ? '100vh' : 'auto',
  },
  scrollContent: {
    paddingBottom: 60, // Espaço extra para o botão não ficar cortado
    flexGrow: 1,
  },
  card: {
    padding: 25,
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
    // Sombra para visual moderno
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnVoltar: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  btnVoltarText: {
    color: '#666',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});