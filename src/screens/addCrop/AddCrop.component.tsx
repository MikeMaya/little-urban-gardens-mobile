/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, Text, ViewPager} from '@ui-kitten/components';
import General from './General.component';
import Cares from './Cares.component';
import Configuration from './Configuration.component';

const newCrop = {
  type: '',
  name: '',
  status: '',
  phase: '',
  plantDate: new Date(),
  harvestDate: null,
  watering: 1,
  lastWatering: null,
  fertilize: 15,
  lastFertilize: null,
};

const titles = ['Información General', 'Cuidados', 'Configuración'];

function AddCrop() {
  const [crop, setCrop] = useState(newCrop);
  const [pageIdx, setPageIdx] = useState(0);

  const register = () => {
    console.log('Crop registered');
  };

  const title = titles[pageIdx];

  return (
    <SafeAreaView style={{flex: 1}}>
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
        <Cares register={register} checkNotif={() => setPageIdx(1)} />
        <Configuration />
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
