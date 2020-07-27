/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Layout,
  Icon,
  Button,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import CropStatus from '../../constants/CropStatus';
import {ScrollView} from 'react-native-gesture-handler';

const LeftIcon = (props: any) => <Icon {...props} name="arrow-ios-forward" />;
const CheckMarkIcon = (props: any) => <Icon {...props} name="checkmark" />;

function Cares(props: any) {
  const {register, checkNotif} = props;
  const [statusIndex, setStatusIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );

  const CropStatusValues = Object.keys(CropStatus).map(
    (key) => CropStatus[key],
  );

  const statusOptions = CropStatusValues.map((value, idx) => (
    <SelectItem key={`crop-status-${idx}`} title={value} />
  ));

  const statusValue = (statusIndex as IndexPath)
    ? CropStatusValues[(statusIndex as IndexPath).row]
    : null;

  return (
    <Layout style={{flex: 1, paddingHorizontal: 25}}>
      <ScrollView>
        <Select
          style={styles.input}
          label="Estado"
          placeholder="Seleciona una opción"
          selectedIndex={statusIndex}
          onSelect={(index: any) => {
            setStatusIndex(index);
          }}
          value={statusValue}>
          {statusOptions}
        </Select>
        <Button
          style={styles.input}
          onPress={checkNotif}
          status="info"
          accessoryRight={LeftIcon}>
          Notificaciones
        </Button>
        <Button style={styles.input} onPress={register} status="primary" accessoryRight={CheckMarkIcon}>
          Registrar
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

export default Cares;
