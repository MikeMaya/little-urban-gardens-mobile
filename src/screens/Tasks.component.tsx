/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {getData} from '../store';
import {generateTasks} from '../utils/tasks';

function NotificationsScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCrops = await getData('crops');
      const genTasks = generateTasks(fetchedCrops);
      setTasks(genTasks);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {tasks.length ? (
          <>
            <Text>Estas son las tareas de hoy</Text>
          </>
        ) : (
          <>
            <Text>Has completado todos los pendientes de hoy</Text>
            <Text>¡Buen trabajo!</Text>
          </>
        )}
      </Layout>
    </SafeAreaView>
  );
}

export default NotificationsScreen;
