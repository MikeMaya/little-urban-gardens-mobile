/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Layout,
  Icon,
  Button,
  Input,
  Select,
  SelectItem,
  IndexPath,
  Datepicker,
} from '@ui-kitten/components';
import CropType from '../../constants/CropType';
import CropPhase from '../../constants/CropPhase';

const LeftIcon = (props: any) => <Icon {...props} name="arrow-ios-forward" />;

function General(props: any) {
  const {crop, setCrop, nextSection} = props;
  const [date, setDate] = React.useState(new Date());
  const [typeIndex, setTypeIndex] = useState<IndexPath | IndexPath[]>();
  const [phaseIndex, setPhaseIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );

  const CropTypeValues: string[] = [];
  for (let item in CropType) {
    CropTypeValues.push(CropType[item]);
  }

  const CropPhaseValues: string[] = [];
  for (let item in CropPhase) {
    CropPhaseValues.push(CropPhase[item]);
  }

  const typeOptions = CropTypeValues.map((value, idx) => (
    <SelectItem key={`crop-type-${idx}`} title={value} />
  ));

  const phaseOptions = CropPhaseValues.map((value, idx) => (
    <SelectItem key={`crop-phase-${idx}`} title={value} />
  ));

  return (
    <Layout style={{flex: 1, padding: 25}}>
      <View style={{flex: 1, justifyContent: "space-between"}}>
        <View>
          <Select
            style={styles.input}
            label="Planta sembrada"
            placeholder="Seleciona una opción"
            selectedIndex={typeIndex}
            multiSelect={false}
            onSelect={(index: IndexPath | IndexPath[]) => {
              if(index as IndexPath){
                setTypeIndex(index);
                setCrop({
                  ...crop,
                  name: `${CropTypeValues[(index as IndexPath).row]} #1`,
                  type: CropTypeValues[(index as IndexPath).row]
                });
              }
            }}
            value={crop.type}>
            {typeOptions}
          </Select>
          <Input
            style={styles.input}
            value={crop.name}
            label="Nombre"
            placeholder="Dale un nombre a tu planta"
            onChangeText={(nextValue: string) =>
              setCrop({...crop, name: nextValue})
            }
          />
          <Datepicker
            label='Sembrada el'
            placeholder='Selecciona una fecha'
            date={date}
            onSelect={(nextDate) => {
              setDate(nextDate);
              setCrop({
                ...crop,
                plantDate: nextDate
              })
            }}
          />
          <Select
            style={styles.input}
            label="Etapa"
            placeholder="Seleciona una opción"
            selectedIndex={phaseIndex}
            onSelect={(index: IndexPath | IndexPath[]) => {
              if(index as IndexPath){
                setPhaseIndex(index);
                setCrop({
                  ...crop,
                  phase: CropPhaseValues[(index as IndexPath).row]
                });
              }
            }}
            value={crop.phase}>
            {phaseOptions}
          </Select>
        </View>
        <View>
          <Button
            style={styles.input}
            status="info"
            accessoryRight={LeftIcon}
            onPress={nextSection}>
            Siguiente
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

export default General;
