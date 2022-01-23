import React from 'react';
import {Container} from '../components/Container';
import {StyleSheet, Text} from 'react-native';
import {ScreenProps} from '../@types';
import {RectButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  buton: {
    flex: 1,
    height: 50,
    width: 200,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
});

export function Menu({navigation}: ScreenProps) {
  return (
    <Container>
      <RectButton
        style={styles.buton}
        onPress={() => navigation.navigate('Home')}>
        <Text>Ir para Home</Text>
      </RectButton>

      <RectButton
        style={styles.buton}
        onPress={() => navigation.navigate('Home')}>
        <Text>Ir para Home</Text>
      </RectButton>
    </Container>
  );
}
