/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon, Layout, Text, Button} from '@ui-kitten/components';
import {getData} from '../store';

const AddIcon = (props: any) => <Icon {...props} name="plus" />;

function CropsScreen() {
  const navigation = useNavigation();
  const [crops, setCrops] = useState([]);

  const handleAdd = () => {
    navigation.navigate('AddCrop');
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCrops = await getData('crops');
      setCrops(fetchedCrops || []);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {crops.length ? (
          <>
            <Text>Estas son tus plantas</Text>
          </>
        ) : (
          <>
            <Text>Aun no tienes ninguna planta</Text>
            <Text>¡Registra algunas para empezar!</Text>
            <Button onPress={handleAdd} accessoryLeft={AddIcon}>
              Agregar
            </Button>
          </>
        )}
      </Layout>
    </SafeAreaView>
  );
}

export default CropsScreen;
