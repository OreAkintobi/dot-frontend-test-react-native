import { api } from '@config';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export const TabOneScreen = () => {
  useEffect(() => {
    api.getBallotData().then(res => console.log('RES =>', res));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
    </View>
  );
};
