/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Layout,
  Icon,
  Button,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import CropStatus from '../../constants/CropStatus';
import Fertilize from '../../constants/Fertilize';
import Watering from '../../constants/Watering';

const LeftIcon = (props: any) => <Icon {...props} name="arrow-ios-forward" />;

function Cares(props: any) {
  const {crop, setCrop, checkNotif} = props;
  const [statusIndex, setStatusIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );
  const [wateringIndex, setWateringIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );
  const [fertilizeIndex, setFertilizeIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );

  const StatusValues: string[] = [];
  for (let item in CropStatus) {
    StatusValues.push(CropStatus[item]);
  }
  
  const WateringValues: string[] = [];
  for (let item in Watering) {
    WateringValues.push(Watering[item]);
  }

  const FertilizeValues: string[] = [];
  for (let item in Fertilize) {
    FertilizeValues.push(Fertilize[item]);
  }

  const statusOptions = StatusValues.map((value, idx) => (
    <SelectItem key={`crop-status-${idx}`} title={value} />
  ));

  const wateringOptions = WateringValues.map((value, idx) => (
    <SelectItem key={`watering-${idx}`} title={value} />
  ));

  const fertilizeOptions = FertilizeValues.map((value, idx) => (
    <SelectItem key={`fertilize-${idx}`} title={value} />
  ));

  const statusValue = crop.status;
  const wateringValue = crop.watering;
  const fertilizeValue = crop.fertilize;

  return (
    <Layout style={{flex: 1, padding: 25}}>
      <View style={{flex: 1, justifyContent: "space-between"}}>
        <View>
          <Select
            style={styles.input}
            label="Estado"
            placeholder="Seleciona una opción"
            selectedIndex={statusIndex}
            onSelect={(index: IndexPath | IndexPath[]) => {
              if(index as IndexPath){
                setStatusIndex(index);
                setCrop({...crop, status: StatusValues[(index as IndexPath).row]});
              }
            }}
            value={statusValue}>
            {statusOptions}
          </Select>
          <Select
            style={styles.input}
            label="Riego"
            placeholder="Seleciona una opción"
            selectedIndex={wateringIndex}
            onSelect={(index: IndexPath | IndexPath[]) => {
              if(index as IndexPath){
                setWateringIndex(index);
                setCrop({...crop, watering: WateringValues[(index as IndexPath).row] });
              }
            }}
            value={wateringValue}>
            {wateringOptions}
          </Select>
          <Select
            style={styles.input}
            label="Abono"
            placeholder="Seleciona una opción"
            selectedIndex={fertilizeIndex}
            onSelect={(index: IndexPath | IndexPath[]) => {
              if(index as IndexPath){
                setFertilizeIndex(index);
                setCrop({...crop, fertilize: FertilizeValues[(index as IndexPath).row]});
              }
            }}
            value={fertilizeValue}>
            {fertilizeOptions}
          </Select>
        </View>
        <View>
          <Button
            style={styles.input}
            onPress={checkNotif}
            status="info"
            accessoryRight={LeftIcon}>
            Notificaciones
          </Button>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});

export default Cares;
