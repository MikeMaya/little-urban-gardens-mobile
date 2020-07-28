/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon, Layout, Text, Button, List, ListItem} from '@ui-kitten/components';
import {getData} from '../store';

const AddIcon = (props: any) => <Icon {...props} name="plus" />;
const FlowerIcon = (props: any) => <Icon {...props} name="settings-2" />;
const ForwardIcon = (props: any) => <Icon {...props} name="arrow-ios-forward" />;

function CropsScreen() {
  const navigation = useNavigation();
  const [crops, setCrops] = useState([]);

  const handleAdd = () => {
    navigation.navigate('AddCrop');
  };

  const renderItem = ({ item, index }: any) => (
    <ListItem
      title={item.name}
      description={item.type}
      accessoryLeft={FlowerIcon}
      accessoryRight={ForwardIcon}
    />
  );

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCrops = await getData('crops');
      setCrops(fetchedCrops || []);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, padding: 25}}>
        {crops.length ? (
          <>
            <View style={{alignItems: "flex-end"}}>
              <Button onPress={handleAdd} accessoryLeft={AddIcon} size='small'>
                Agregar
              </Button>
            </View>
            <List
              data={crops}
              renderItem={renderItem}
            />
          </>
        ) : (
          <>
            <Text>Aun no tienes ninguna planta</Text>
            <Text>¡Registra algunas para empezar!</Text>
            <Button onPress={handleAdd} accessoryLeft={AddIcon} size='small'>
              Agregar
            </Button>
          </>
        )}
      </Layout>
    </SafeAreaView>
  );
}

export default CropsScreen;
