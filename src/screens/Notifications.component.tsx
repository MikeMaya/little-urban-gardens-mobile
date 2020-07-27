/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {getData} from '../store';
import {generateNotifications} from '../utils/notifications';

function NotificationsScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCrops = await getData('crops');
      const genNotifs = generateNotifications(fetchedCrops);
      setNotifications(genNotifs);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {notifications.length ? (
          <>
            <Text>Estas son las notificaciones</Text>
          </>
        ) : (
          <>
            <Text>No tienes de que preocuparte por el momento</Text>
            <Text>Nosotros te avisaremos si tienes algun pendiente</Text>
          </>
        )}
      </Layout>
    </SafeAreaView>
  );
}

export default NotificationsScreen;
