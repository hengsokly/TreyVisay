import React, { Component } from 'react';

import { createStackNavigator } from  'react-navigation';
import { Text, Platform, StatusBar } from 'react-native';
import { FontSetting } from '../../../assets/style_sheets/font_setting';

import ClusterScreen from '../../Vocational/cluster_screen';
import CareerIndexScreen from '../../Vocational/index_screen';
import CareerDetailScreen from '../../Vocational/career_detail_screen';
import InstitutionDetail from '../../school/institution_detail';
import Description from '../../Vocational/description';

import BackButton from '../../../components/shared/back_button';
import InfoButton from '../../../components/info_button';
import headerStyles from '../../../assets/style_sheets/header';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function VocationalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClusterScreen" component={ClusterScreen} options={{headerShown: false}}/>
      <Stack.Screen name="CareerIndexScreen" component={CareerIndexScreen} navigationOptions={({navigation}) => ({
        title: navigation.state.params.title
      })}/>
      <Stack.Screen name="CareerDetailScreen" component={CareerDetailScreen} options={{headerShown: false}}/>
      <Stack.Screen name="InstitutionDetail" component={InstitutionDetail} options={{headerShown: false}}/>
      <Stack.Screen name="Description" component={Description} navigationOptions={({navigation}) => ({
        title: navigation.state.params.title
      })}/>
    </Stack.Navigator>
  )
}

// const VocationalStack = createStackNavigator(
//   {
//     ClusterScreen: {
//       screen: ClusterScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       }),
//     },
//     CareerIndexScreen: {
//       screen: CareerIndexScreen,
//       navigationOptions: ({navigation}) => ({
//         title: navigation.state.params.title,
//       })
//     },
//     CareerDetailScreen: {
//       screen: CareerDetailScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     InstitutionDetail: {
//       screen: InstitutionDetail,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     Description: {
//       screen: Description,
//       navigationOptions: ({navigation}) => ({
//         title: navigation.state.params.title
//       })
//     }
//   },
//   {
//     navigationOptions: ({
//       headerStyle: {
//         // marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
//       },
//       headerTitleStyle: {
//         fontSize: FontSetting.nav_title,
//         fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Kantumruy',
//         fontWeight: '300'
//       }
//     })
//   }
// );

export default VocationalStack;
