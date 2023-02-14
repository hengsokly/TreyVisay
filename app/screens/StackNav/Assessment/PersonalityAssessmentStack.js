import React, { Component } from 'react';

import { Platform, StatusBar } from 'react-native';

import CloseButton from '../../../components/shared/close_button';
import NextButton from '../../../components/NextButton';
import SaveButton from '../../../components/shared/save_button';

import PersonalityAssessment from '../../PersonalityAssessment/PersonalityAssessment';
import AboutPersonalityAssessment from '../../PersonalityAssessment/About';
import PersonalityAssessmentForm from '../../PersonalityAssessmentForm/PersonalityAssessmentForm';
import PersonalityAssessmentResult from '../../PersonalityAssessmentResult/PersonalityAssessmentResult';
import PersonalityAssessmentResultHistory from '../../PersonalityAssessmentResultHistory/PersonalityAssessmentResultHistory';
import PersonalityAssessmentMajorList from '../../PersonalityAssessmentMajorList/PersonalityAssessmentMajorList';
import PersonalityAssessmentMajorDetail from '../../PersonalityAssessmentMajorDetail/PersonalityAssessmentMajorDetail';
import PersonalityAssessmentPersonalityCategory from '../../PersonalityAssessmentPersonalityCategory/PersonalityAssessmentPersonalityCategory';
import PersonalityAssessmentHighSchoolStudyOption from '../../PersonalityAssessmentHighSchoolStudyOption/PersonalityAssessmentHighSchoolStudyOption';
import PersonalityAssessmentJobList from '../../PersonalityAssessmentJobList/PersonalityAssessmentJobList';
import PersonalityAssessmentJobDetail from '../../PersonalityAssessmentJobDetail/PersonalityAssessmentJobDetail';
import PersonalityAssessmentSubjectTip from '../../PersonalityAssessmentSubjectTip/PersonalityAssessmentSubjectTip';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AssessmentStack() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName="PersonalityAssessmentScreen">
      <Stack.Screen name="PersonalityAssessmentScreen" component={PersonalityAssessment} options={{headerShown: false}}/>
      <Stack.Screen name="AboutPersonalityAssessment" component={AboutPersonalityAssessment} options={{title: "អំពីការធ្វើតេស្តស្វែងយល់បុគ្គលិកលក្ខណៈ"}} />
      <Stack.Screen name="RealisticScreen" component={PersonalityAssessmentForm} options={{
        title: "អនុវត្តតេស្តប្រាកដនិយម",
        headerLeft: (props) => <CloseButton navigation={props.navigation}/>,
        headerRight: (props) => <NextButton navigation={props.navigation}/>,
      }} />
      <Stack.Screen name="InvestigativeScreen" component={PersonalityAssessmentForm} options={{
        title: "អនុវត្តតេស្តពូកែអង្កេត",
        headerLeft: (props) => <CloseButton navigation={props.navigation}/>,
        headerRight: (props) => <NextButton navigation={props.navigation}/>,
      }} />
      <Stack.Screen name="ArtisticScreen" component={PersonalityAssessmentForm} options={{
        title: "អនុវត្តតេស្តសិល្បៈនិយម",
        headerLeft: (props) => <CloseButton navigation={props.navigation}/>,
        headerRight: (props) => <NextButton navigation={props.navigation}/>,
      }} />
      <Stack.Screen name="SocialScreen" component={PersonalityAssessmentForm} options={{
        title: "អនុវត្តតេស្តសង្គម",
        headerLeft: (props) => <CloseButton navigation={props.navigation}/>,
        headerRight: (props) => <NextButton navigation={props.navigation}/>,
      }} />
      <Stack.Screen name="EnterprisingScreen" component={PersonalityAssessmentForm} options={{
        title: "អនុវត្តតេស្តត្រិះរិះពិចារណា",
        headerLeft: (props) => <CloseButton navigation={props.navigation}/>,
        headerRight: (props) => <NextButton navigation={props.navigation}/>,
      }} />
      <Stack.Screen name="ConventionalScreen" component={PersonalityAssessmentForm} options={{
        title: "អនុវត្តតេស្តសណ្ដាប់ធ្នាប់",
        headerLeft: (props) => <CloseButton navigation={props.navigation}/>,
        headerRight: (props) => <NextButton navigation={props.navigation}/>,
      }} />
      <Stack.Screen name="AssessmentResultScreen" component={PersonalityAssessmentForm} options={{
        title: "បង្ហាញលទ្ធផល",
        headerLeft: (props) => <CloseButton navigation={props.navigation}/>,
        headerRight: (props) => <NextButton navigation={props.navigation}/>,
      }} />
      <Stack.Screen name="AssessmentResultHistoryScreen" component={PersonalityAssessmentResultHistory} options={{title: "លទ្ធផលតេស្ត"}} />
      <Stack.Screen name="PersonalityCategoryScreen" component={PersonalityAssessmentPersonalityCategory} options={({ navigation, route }) => ({
        headerTitle: `លទ្ធផលតេស្តបែប${navigation.getParam('title')}`,
      })} />
      <Stack.Screen name="HighSchoolStudyOptionScreen" component={PersonalityAssessmentPersonalityCategory} options={{title: "ជម្រើសនៃការសិក្សាកម្រិតមធ្យមសិក្សាទុតិយភូមិ"}} />
      <Stack.Screen name="MajorListScreen" component={PersonalityAssessmentMajorList} options={{title: "ជម្រើសនៃការសិក្សាកម្រិតឧត្តមសិក្សា"}} />
      <Stack.Screen name="MajorDetailScreen" component={PersonalityAssessmentMajorDetail} options={({ navigation, route }) => ({
        headerTitle: `ការសិក្សាជំនាញ${navigation.getParam('title')}`,
      })} />
      <Stack.Screen name="PersonalityAssessmentJobListScreen" component={PersonalityAssessmentJobList} options={{title: "ជម្រើសអាជីពការងារសក្ដិសម"}} />
      <Stack.Screen name="PersonalityAssessmentJobDetailScreen" component={PersonalityAssessmentJobDetail} options={{title: "ទំព័រលម្អិតពីអាជីព"}} />
      <Stack.Screen name="PersonalityAssessmentSubjectTipScreen" component={PersonalityAssessmentSubjectTip} options={({ navigation, route }) => ({
        headerTitle: `គន្លឹះពង្រឹងមុខវិជ្ជា${navigation.getParam('title')}`
      })} />

    </Stack.Navigator>
  )
}

export default AssessmentStack;
