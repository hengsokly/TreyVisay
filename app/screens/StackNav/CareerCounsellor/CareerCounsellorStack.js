import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
// import { createStackNavigator } from  'react-navigation';
import { FontSetting } from '../../../assets/style_sheets/font_setting';

import CareerCategoriesScreen from '../../Careers/CategoriesScreen';
import ShowCareerCategoryScreen from '../../Careers/ShowCategoryScreen';
import CareerDetailScreen from '../../Careers/DetailScreen';

import CareerCounsellorScreen from '../../CareerCounsellor/CareerCounsellor';
import AboutCareerCounsellor from '../../CareerCounsellor/AboutCareerCounsellor';

import PersonalUnderstandingForm from '../../CareerTest/PersonalUnderstanding/PersonalUnderstandingForm';
import SubjectScreen from '../../CareerTest/Subject/subject_screen';
import PersonalityScreen from '../../CareerTest/Personality/personality_screen';
import PersonalityJobsScreen from '../../CareerTest/PersonalityJobs/personality_jobs_screen';
import SummaryScreen from '../../CareerTest/FavoriteJob/summary_screen';
import RecommendationScreen from '../../CareerTest/Recommendation/recommendation_screen';
import GoalScreen from '../../CareerTest/Goal/goal_screen';
import ContactScreen from '../../CareerTest/Contact/contact_screen';

import InstitutionDetail from '../../school/institution_detail';

import GameHistoryScreen from '../../GameHistory/game_history_screen';
import PersonalUnderstandingReport from '../../GameHistory/personal_understanding_report';
import SubjectReport from '../../GameHistory/subject_report';
import PersonalityJobsReport from '../../GameHistory/personality_jobs_report';
import StudentPersonalityReport from '../../GameHistory/student_personality_report';
import RecommendationReport from '../../GameHistory/recommendation_report';
import SchoolListScreen from '../../GameHistory/school_list';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function CareerCounsellorStack() {
  return(
    <Stack.Navigator screenOptions={{ }} initialRouteName='CareerCounsellorScreen'>
      <Stack.Screen name="CareerCounsellorScreen" component={CareerCounsellorScreen} options={{headerShown: false}} />
      <Stack.Screen name="AboutCareerCounsellor" component={AboutCareerCounsellor} options={{title: 'ការធ្វើតេសវាយតម្លៃមុខរបរ និងអាជីព'}} />
      <Stack.Screen name="PersonalUnderstandingFormScreen" component={PersonalUnderstandingForm} options={{headerShown: false}} />
      <Stack.Screen name="ShowCareerCategoryScreen" component={ShowCareerCategoryScreen} options={({navigation}) => ({
        title: navigation.state.params.title,
      })} />
      <Stack.Screen name="CareerDetailScreen" component={CareerDetailScreen} options={{headerShown: false}} />
      <Stack.Screen name="AboutCareerCounsellorScreen" component={AboutCareerCounsellor} options={{title: "ការធ្វើតេសវាយតម្លៃមុខរបរ និងអាជីព"}} />
      <Stack.Screen name="SubjectScreen" component={SubjectScreen} options={{headerShown: false}} />
      <Stack.Screen name="PersonalityScreen" component={PersonalityScreen} options={{headerShown: false}} />
      <Stack.Screen name="PersonalityJobsScreen" component={PersonalityJobsScreen} options={{headerShown: false}} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} options={{headerShown: false}} />
      <Stack.Screen name="RecommendationScreen" component={RecommendationScreen} options={{headerShown: false}} />
      <Stack.Screen name="GoalScreen" component={GoalScreen} options={{headerShown: false}} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} options={{headerShown: false}} />
      <Stack.Screen name="CareerCategoriesScreen" component={CareerCategoriesScreen} options={{headerShown: false}} />
      <Stack.Screen name="InstitutionDetail" component={InstitutionDetail} options={{headerShown: false}} />
      <Stack.Screen name="GameHistoryScreen" component={GameHistoryScreen} options={{title: "លទ្ធផលតេស្ត"}} />
      <Stack.Screen name="PersonalUnderstandingReport" component={PersonalUnderstandingReport} options={{title: "ស្វែងយល់អំពីខ្លួនឯង"}} />
      <Stack.Screen name="SubjectReport" component={SubjectReport} options={{title: "ការបំពេញមុខវិជ្ជា"}} />
      <Stack.Screen name="PersonalityJobsReport" component={PersonalityJobsReport} options={{title: "ការជ្រើសរើសមុខរបរផ្អែកលើបុគ្គលិកលក្ខណៈ"}} />
      <Stack.Screen name="StudentPersonalityReport" component={StudentPersonalityReport} options={{title: "ការបំពេញបុគ្គលិកលក្ខណៈ"}} />
      <Stack.Screen name="RecommendationReport" component={RecommendationReport} options={{title: "ការផ្តល់អនុសាសន៍"}} />
      <Stack.Screen name="SchoolListScreen" component={RecommendationReport} options={{title: "គ្រឹះស្ថានសិក្សា"}} />

    </Stack.Navigator>
  )

}
// const CareerCounsellorStack = createStackNavigator(
//   {
//     CareerCounsellorScreen: {
//       screen: CareerCounsellor,
//       navigationOptions: ({navigation}) => ({
//         title: 'វាយតម្លៃមុខរបរនិងអាជីព',
//         header: null
//       })
//     },
//     AboutCareerCounsellorScreen: {
//       screen: AboutCareerCounsellor,
//       navigationOptions: ({navigation}) => ({
//         title: 'ការធ្វើតេសវាយតម្លៃមុខរបរ​ និងអាជីព',
//       })
//     },

//     PersonalUnderstandingFormScreen: {
//       screen: PersonalUnderstandingForm,
//       navigationOptions: ({navigation}) => ({
//         header: null,
//         gesturesEnabled: false
//       })
//     },
//     ShowCareerCategoryScreen: {
//       screen: ShowCareerCategoryScreen,
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
//     SubjectScreen: {
//       screen: SubjectScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     PersonalityScreen: {
//       screen: PersonalityScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     PersonalityJobsScreen: {
//       screen: PersonalityJobsScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     SummaryScreen: {
//       screen: SummaryScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     RecommendationScreen: {
//       screen: RecommendationScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     GoalScreen: {
//       screen: GoalScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     ContactScreen: {
//       screen: ContactScreen,
//       navigationOptions: ({navigation}) => ({
//         header: null
//       })
//     },
//     CareerCategoriesScreen: {
//       screen: CareerCategoriesScreen,
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
//     GameHistoryScreen: {
//       screen: GameHistoryScreen,
//       navigationOptions: ({
//         title: 'លទ្ធផលតេស្ត'
//       })
//     },
//     PersonalUnderstandingReport: {
//       screen: PersonalUnderstandingReport,
//       navigationOptions: ({
//         title: 'ស្វែងយល់អំពីខ្លួនឯង'
//       })
//     },
//     SubjectReport: {
//       screen: SubjectReport,
//       navigationOptions: ({
//         title: 'ការបំពេញមុខវិជ្ជា'
//       })
//     },
//     PersonalityJobsReport: {
//       screen: PersonalityJobsReport,
//       navigationOptions: ({
//         title: 'ការជ្រើសរើសមុខរបរផ្អែកលើបុគ្គលិកលក្ខណៈ'
//       })
//     },
//     StudentPersonalityReport: {
//       screen: StudentPersonalityReport,
//       navigationOptions: ({
//         title: 'ការបំពេញបុគ្គលិកលក្ខណៈ'
//       })
//     },
//     RecommendationReport: {
//       screen: RecommendationReport,
//       navigationOptions: ({
//         title: 'ការផ្តល់អនុសាសន៍'
//       })
//     },
//     SchoolListScreen: {
//       screen: SchoolListScreen,
//       navigationOptions: ({
//         title: 'គ្រឹះស្ថានសិក្សា'
//       })
//     }
//   },
//   {
//     navigationOptions: ({
//       headerStyle: {
//         // marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
//       },
//       headerTitleStyle: {
//         fontSize: FontSetting.nav_title,
//         fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Kantumruy',
//         fontWeight: '300'
//       },
//       headerBackTitle: null
//     }),
//     initialRouteName: 'CareerCounsellorScreen'
//   }
// );

export default CareerCounsellorStack;
