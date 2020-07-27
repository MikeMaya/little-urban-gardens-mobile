/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Layout,
  Icon,
  Button,
  Input,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import CropType from '../../constants/CropType';
import CropPhase from '../../constants/CropPhase';

const LeftIcon = (props: any) => <Icon {...props} name="arrow-ios-forward" />;

function General(props: any) {
  const {crop, setCrop, nextSection} = props;
  const [typeIndex, setTypeIndex] = useState<IndexPath | IndexPath[]>();
  const [phaseIndex, setPhaseIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );

  const CropTypeValues = Object.keys(CropType).map((key) => CropType[key]);

  const CropPhaseValues = Object.keys(CropPhase).map((key) => CropPhase[key]);

  const typeOptions = CropTypeValues.map((value, idx) => (
    <SelectItem key={`crop-type-${idx}`} title={value} />
  ));

  const phaseOptions = CropPhaseValues.map((value, idx) => (
    <SelectItem key={`crop-phase-${idx}`} title={value} />
  ));

  const typeValue = (typeIndex as IndexPath)
    ? CropTypeValues[(typeIndex as IndexPath).row]
    : null;

  const phaseValue = (phaseIndex as IndexPath)
    ? CropPhaseValues[(phaseIndex as IndexPath).row]
    : null;

  const defaultName = typeValue ? `${typeValue} #1` : undefined;

  return (
    <Layout style={{flex: 1, paddingHorizontal: 25}}>
      <ScrollView>
        <Select
          style={styles.input}
          label="Planta sembrada"
          placeholder="Seleciona una opción"
          selectedIndex={typeIndex}
          multiSelect={false}
          onSelect={(index: IndexPath | IndexPath[]) => {
            setTypeIndex(index);
          }}
          value={typeValue}>
          {typeOptions}
        </Select>
        <Input
          style={styles.input}
          value={crop.name || defaultName}
          label="Nombre"
          placeholder="Dale un nombre a tu planta"
          onChangeText={(nextValue: string) =>
            setCrop({...crop, name: nextValue})
          }
        />
        <Select
          style={styles.input}
          label="Etapa"
          placeholder="Seleciona una opción"
          selectedIndex={phaseIndex}
          onSelect={(index: any) => {
            setPhaseIndex(index);
          }}
          value={phaseValue}>
          {phaseOptions}
        </Select>
        <Button
          style={styles.input}
          status="info"
          accessoryRight={LeftIcon}
          onPress={nextSection}>
          Siguiente
        </Button>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});

export default General;
