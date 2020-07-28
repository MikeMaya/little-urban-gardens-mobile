/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Button, Toggle, Icon} from '@ui-kitten/components';

const CheckMark = (props: any) => <Icon {...props} name="checkmark-circle-2" />;

function Configuration(props: any) {
  const {crop, setCrop, register} = props;
  
  return (
    <Layout style={{flex: 1, padding: 25}}>
      <View style={{flex: 1, justifyContent: "space-between"}}>
        <View style={{alignItems: "flex-start"}}>
          <Toggle
            style={styles.input}
            checked={crop.tasks.watering}
            onChange={() => {
              setCrop({
                ...crop,
                tasks: {
                  ...crop.tasks,
                  watering: !crop.tasks.watering
                }
              });
            }}>
            Generar tareas de riego
          </Toggle>
          <Toggle
            style={styles.input}
            checked={crop.tasks.fertilize}
            onChange={() => {
              setCrop({
                ...crop,
                tasks: {
                  ...crop.tasks,
                  fertilize: !crop.tasks.fertilize
                }
              });
            }}>
            Generar tareas de fertilización
          </Toggle>
        </View>
        <View>
          <Button onPress={register} accessoryRight={CheckMark}>
            Finalizar
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

export default Configuration;
