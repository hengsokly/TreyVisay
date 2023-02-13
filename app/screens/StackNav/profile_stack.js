import React, { Component } from 'react';

import { StatusBar, Platform, Text } from 'react-native';
import { FontSetting } from '../../assets/style_sheets/font_setting';

import ProfileScreen from '../profile/profile';
import EditProfilePhoto from '../profile/edit_profile_photo';
import EditPersonalInfo from '../profile/edit_personal_info';
import ProfileForm from '../profile/profile_form';
import Login from '../Account/login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          fontSize: FontSetting.nav_title,
          fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Kantumruy',
          fontWeight: '300'
        }}
      >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="EditProfilePhoto" component={EditProfilePhoto} options={{title: "កែតម្រូវប្រវត្តិរូប"}}/>
        <Stack.Screen name="EditPersonalInfo" component={EditProfilePhoto} options={{title: "កែតម្រូវប្រវត្តិរូប"}}/>

        <Stack.Screen name="ProfileForm" component={ProfileForm} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
  // return(<Text>ProfileStack</Text>)
}

// const ProfileStack = createStackNavigator(
//   {
//     ProfileScreen: {
//       screen: ProfileScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     EditProfilePhoto: {
//       screen: EditProfilePhoto,
//       navigationOptions: ({navigation}) => ({
//         title: 'កែតម្រូវប្រវត្តិរូប',
//       })
//     },
//     EditPersonalInfo: {
//       screen: EditPersonalInfo,
//       navigationOptions: ({navigation}) => ({
//         title: 'កែតម្រូវប្រវត្តិរូប',
//       })
//     },
//     ProfileForm: {
//       screen: ProfileForm,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     Login: {
//       screen: Login,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//   },
//   {
//     navigationOptions: ({
//       headerTitleStyle: {
//         fontSize: FontSetting.nav_title,
//         fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Kantumruy',
//         fontWeight: '300'
//       }
//     })
//   }
// );

// ProfileStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }

//   return {
//     tabBarVisible,
//   };
// };

export default ProfileStack;
