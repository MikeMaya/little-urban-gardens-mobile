import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar, Tab} from '@ui-kitten/components';
import CropsScreen from '../screens/Crops.component';
import TasksScreen from '../screens/Tasks.component';
import NotificationsScreen from '../screens/Notifications.component';
import AddCropScreen from '../screens/addCrop/AddCrop.component';

const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabBar({navigation, state}: any) {
  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index: any) => navigation.navigate(state.routeNames[index])}>
      <Tab title="Mis cultivos" />
      <Tab title="Tareas" />
      <Tab title="Notificaciones" />
    </TabBar>
  );
}

function TabNavigator() {
  return (
    <TopTab.Navigator tabBar={(props: any) => <TopTabBar {...props} />}>
      <TopTab.Screen name="Crops" component={CropsScreen} />
      <TopTab.Screen name="Tasks" component={TasksScreen} />
      <TopTab.Screen name="Notifications" component={NotificationsScreen} />
    </TopTab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="MyCrops"
          component={TabNavigator} 
          options={{ drawerLabel: 'Mis cultivos' }}
        />
        <Drawer.Screen
          name="AddCrop"
          component={AddCropScreen}
          options={{ drawerLabel: 'Nueva planta' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
