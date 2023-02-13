import React, { Component } from 'react';

// import { createStackNavigator } from 'react-navigation';

import ProfileForm from '../profile/profile_form';
import Login from '../Account/login';
import HomeScreen from '../home/home';
import CareerCounsellorStack from './CareerCounsellor/CareerCounsellorStack';
import PersonalityAssessmentStack from './Assessment/PersonalityAssessmentStack';
import TermsCondition from '../TermsCondition/TermsCondition';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={({ navigation }) => <HomeScreen screenProps={{ rootNavigation: navigation }} />} />
      <Stack.Screen name="ProfileForm" component={ProfileForm} />
      <Stack.Screen name="CareerCounsellorStack" component={CareerCounsellorStack} />
      <Stack.Screen name="PersonalityAssessmentStack" component={PersonalityAssessmentStack} />
      <Stack.Screen name="TermsCondition" component={TermsCondition} />
    </Stack.Navigator>
  )
}
// const AccountStack = createStackNavigator(
//   {
//     Login: {
//       screen: Login,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     Home: {
//       screen: ({ navigation }) => <HomeScreen screenProps={{ rootNavigation: navigation }} />,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     ProfileForm: {
//       screen: ProfileForm,
//       navigationOptions: ({ navigation }) => ({
//         header: null
//       })
//     },
//     CareerCounsellorStack: {
//       screen: CareerCounsellorStack,
//       navigationOptions: ({ navigation }) => ({
//         header: null
//       })
//     },
//     PersonalityAssessmentStack: {
//       screen: PersonalityAssessmentStack,
//       navigationOptions: ({ navigation }) => ({
//         header: null
//       })
//     },
//     TermsCondition: {
//       screen: TermsCondition,
//       navigationOptions: ({navigation}) => ({
//         title: 'Terms & Condition',
//         header: null
//       }),
//     }
//   },
//   {
//     initialRouteName: 'Login',
//   }
// );

export default AccountStack;
