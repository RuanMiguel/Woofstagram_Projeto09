import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.mainContainer}> 
      
      <Text style={styles.title}>Bem-vindo!</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />

        
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true} // Isso faz os caracteres virarem bolinhas
        />
      </View>

      <TouchableOpacity 
        style={styles.buttonEntrar} 
        onPress={() => navigation.navigate('Main')}
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
  );
}

// 3. Definição dos estilos (Onde o mainContainer vive)
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
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
  buttonEntrar: {
    backgroundColor: '#3B82F6', // Azul moderno
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonCriar: {
    backgroundColor: '#10B981', // Verde moderno
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

/*import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', padding: 20, backgroundColor: '#fff' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Main')}
      />

      <Button
        title="Criar conta"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );

  
}
  



import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    // O flex: 1 e o backgroundColor são vitais para o teste
    <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>
        Teste de Tela: Login
      </Text>
      
      <TextInput
        placeholder="Email"
        style={{ height: 50, borderWidth: 2, borderColor: 'black', marginBottom: 10, padding: 10, backgroundColor: 'white' }}
        value={email}
        onChangeText={setEmail}
      />

      <Button
        title="Entrar (Ir para Home)"
        onPress={() => navigation.navigate('Main')}
      />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Criar conta"
          color="green"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
} */