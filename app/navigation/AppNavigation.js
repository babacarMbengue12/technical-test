import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, screenOptions} from '../constants/constants';
import Header from '../shared/header';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Dashboard from '../screens/Dashboard';
import Users from '../screens/users/Users';
import User from '../screens/users/User';
import Resources from '../screens/Resources/Resources';
import Resource from '../screens/Resources/Resource';
import Pdf from '../screens/Pdf';
import Redux from '../screens/Redux';
import Create from '../screens/Create';

const StackNavigator = createStackNavigator();

const options = {
  withouteader: {
    headerShown: false,
  },
  withHeader: {
    containerStyle: {backgroundColor: '#FFF'},
    titleStyle: {color: 'rgba(0, 0, 0, 0.7)'},
    drawerIconColor: COLORS.app1,
    leftIconColor: COLORS.app1,
  },
};
const AppNavigation = () => {
  return (
    <StackNavigator.Navigator
      headerMode={'screen'}
      screenOptions={{...screenOptions, header: Header}}>
      <StackNavigator.Screen
        name="Login"
        component={Login}
        options={options.withouteader}
      />
      <StackNavigator.Screen
        name="Register"
        component={Register}
        options={options.withouteader}
      />
      <StackNavigator.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          ...options.withouteader,
        }}
      />
      <StackNavigator.Screen
        name="Users"
        component={Users}
        options={{
          ...options.withHeader,
          title: 'Users',
        }}
      />
      <StackNavigator.Screen
        name="User"
        component={User}
        options={{
          ...options.withHeader,
          title: '',
        }}
      />
      <StackNavigator.Screen
        name="Resources"
        component={Resources}
        options={{
          ...options.withHeader,
          title: 'Resources',
        }}
      />
      <StackNavigator.Screen
        name="Resource"
        component={Resource}
        options={{
          ...options.withHeader,
          title: '',
        }}
      />
      <StackNavigator.Screen
        name="Pdf"
        component={Pdf}
        options={{
          ...options.withHeader,
          title: 'Pdf',
        }}
      />
      <StackNavigator.Screen
        name="Redux"
        component={Redux}
        options={{
          ...options.withHeader,
          title: 'Redux',
        }}
      />
      <StackNavigator.Screen
        name="Create"
        component={Create}
        options={{
          ...options.withHeader,
          title: 'Create',
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default AppNavigation;
