/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, Text, ViewPager} from '@ui-kitten/components';
import General from './General.component';
import Cares from './Cares.component';
import Configuration from './Configuration.component';
import Fertilize from '../../constants/Fertilize';
import Watering from '../../constants/Watering';
import CropStatus from '../../constants/CropStatus';
import CropPhase from '../../constants/CropPhase';
import { useNavigation } from '@react-navigation/native';
import { storeData, getData } from '../../store';

const newCrop = {
  type: '',
  name: 'Mi nueva planta',
  status: CropStatus.HEALTHY,
  phase: CropPhase.PLANTED,
  plantDate: null,
  harvestDate: null,
  watering: Watering.DAILY,
  lastWatering: null,
  fertilize: Fertilize.NONE,
  lastFertilize: null,
  tasks: {
    watering: true,
    fertilize: true
  }
};

const titles = ['Información General', 'Cuidados', 'Configuración'];

function AddCrop() {
  const navigation = useNavigation();
  const [crop, setCrop] = useState(newCrop);
  const [pageIdx, setPageIdx] = useState(0);

  const register = async () => {
    const crops = await getData('crops') || [];
    crops.push(crop); 
    await storeData('crops', crops);
    navigation.navigate('Crops');
  };

  const title = titles[pageIdx];

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 25}}>
      <View style={styles.avatarContainer}>
        <Text style={styles.header} status="primary" category="h1">
          {title}
        </Text>
        <Avatar
          style={styles.avatar}
          source={require('../../assets/plant.png')}
          shape="round"
        />
      </View>
      <ViewPager
        style={{flex: 1}}
        selectedIndex={pageIdx}
        onSelect={(index) => setPageIdx(index)}>
        <General
          crop={crop}
          setCrop={setCrop}
          nextSection={() => setPageIdx(1)}
        />
        <Cares
          crop={crop}
          setCrop={setCrop}
          checkNotif={() => setPageIdx(2)} 
        />
        <Configuration 
          crop={crop}
          setCrop={setCrop}
          register={register}
        />
      </ViewPager>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    margin: 8,
    height: 100,
    width: 100,
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 25,
  },
  header: {
    fontWeight: 'bold',
  },
});

export default AddCrop;
