import React from 'react';
import {Container} from '../components/Container';
import {StyleSheet, Text} from 'react-native';
import {ScreenProps} from '../@types';
import {
  BorderlessButton,
  RectButton,
  TextInput,
} from 'react-native-gesture-handler';
import {AuthContext, useAuth} from '../hooks/auth';

const styles = StyleSheet.create({
  buton: {
    height: 50,
    width: 200,
    marginVertical: 100,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    color: 'black',
    marginVertical: 20,
  },
  espaco: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    marginVertical: 50,
  },
});

export function Home({navigation}: ScreenProps) {
  const {user} = useAuth();
  console.log(user);

  return (
    <Container>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <BorderlessButton
        style={styles.buton}
        onPress={() => navigation.navigate('Menu')}>
        <Text>Entrar</Text>
      </BorderlessButton>
    </Container>
  );
}
