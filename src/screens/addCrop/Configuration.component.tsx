/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Layout, Button} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';

function Configuration() {
  return (
    <Layout style={{flex: 1, paddingHorizontal: 25}}>
      <ScrollView>
        <Button>Finalizar</Button>
      </ScrollView>
    </Layout>
  );
}

export default Configuration;
