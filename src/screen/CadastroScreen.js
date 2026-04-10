import React from 'react';
import { ScrollView, Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import InputWithLabel from '../components/InputWithLabel.js';
import { Formik } from 'formik';

const formatarData = (val) => val;

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
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate('Main');
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue
        }) => (
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
          >

            <View style={styles.card}>

              <InputWithLabel
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
              />

              <InputWithLabel
                label="Senha"
                placeholder="Digite sua senha"
                value={values.senha}
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                secureTextEntry
                error={touched.senha && errors.senha}
              />

              <InputWithLabel
                label="Confirmar Senha"
                placeholder="Confirme sua senha"
                value={values.confirmarSenha}
                onChangeText={handleChange('confirmarSenha')}
                onBlur={handleBlur('confirmarSenha')}
                secureTextEntry
                error={touched.confirmarSenha && errors.confirmarSenha}
              />

              <InputWithLabel
                label="Nome do Pet"
                placeholder="Nome do seu pet"
                value={values.nomePet}
                onChangeText={handleChange('nomePet')}
                onBlur={handleBlur('nomePet')}
                error={touched.nomePet && errors.nomePet}
              />

              <InputWithLabel
                label="Data de Nascimento"
                placeholder="Ex: 01/01/2020"
                value={values.dataNascimento}
                onChangeText={(text) =>
                  setFieldValue('dataNascimento', formatarData(text))
                }
                onBlur={handleBlur('dataNascimento')}
                error={touched.dataNascimento && errors.dataNascimento}
              />

              <InputWithLabel
                label="Raça"
                placeholder="Raça do pet"
                value={values.raca}
                onChangeText={handleChange('raca')}
                onBlur={handleBlur('raca')}
                error={touched.raca && errors.raca}
              />

              <InputWithLabel
                label="Brinquedo Favorito"
                placeholder="Brinquedo favorito"
                value={values.brinquedo}
                onChangeText={handleChange('brinquedo')}
                onBlur={handleBlur('brinquedo')}
                error={touched.brinquedo && errors.brinquedo}
              />

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Cadastrar Pet</Text>
              </TouchableOpacity>

              <View style={{ marginTop: 20 }}>
                <Button
                  title="Voltar"
                  onPress={() => navigation.navigate('SignIn')}
                />
              </View>

              <View style={{ height: 800, backgroundColor: 'red' }}></View>

            </View>

          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: '100vh', // 🔥 ESSENCIAL pro web
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    flexGrow: 1, // 🔥 faz o scroll funcionar no web
  },
  card: {
    flexGrow: 1, // 🔥 garante que o conteúdo cresce
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});