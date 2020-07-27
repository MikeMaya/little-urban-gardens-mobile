import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar, Tab} from '@ui-kitten/components';
import CropsScreen from '../screens/Crops.component';
import TasksScreen from '../screens/Tasks.component';
import NotificationsScreen from '../screens/Notifications.component';
import AddCropScreen from '../screens/addCrop/AddCrop.component';

const {Navigator, Screen} = createMaterialTopTabNavigator();

function TopTabBar({navigation, state}: any) {
  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index: any) => navigation.navigate(state.routeNames[index])}>
      <Tab title="Crops" />
      <Tab title="Tasks" />
      <Tab title="Notifications" />
    </TabBar>
  );
}

function TabNavigator() {
  return (
    <Navigator tabBar={(props: any) => <TopTabBar {...props} />}>
      <Screen name="Crops" component={CropsScreen} />
      <Screen name="Tasks" component={TasksScreen} />
      <Screen name="Notifications" component={NotificationsScreen} />
      <Screen name="AddCrop" component={AddCropScreen} />
    </Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
