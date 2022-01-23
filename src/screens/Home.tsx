import React from 'react';
import {Container} from '../components/Container';
import {StyleSheet, Text} from 'react-native';
import {ScreenProps} from '../@types';
import {
  BorderlessButton,
  RectButton,
  TextInput,
} from 'react-native-gesture-handler';

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
  },
  espaco: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    marginVertical: 100,
  },
});

export function Home({navigation}: ScreenProps) {
  return (
    <Container>
      <RectButton
        style={styles.buton}
        onPress={() => navigation.navigate('Menu')}>
        <Text>Ir para Menu</Text>
      </RectButton>

      <BorderlessButton
        style={styles.buton}
        onPress={() => navigation.navigate('Menu')}>
        <Text>Ir para Menu</Text>
      </BorderlessButton>

      <Text style={styles.espaco}>?</Text>
      <TextInput style={styles.input} />
      <Text style={styles.espaco}>?</Text>
    </Container>
  );
}
