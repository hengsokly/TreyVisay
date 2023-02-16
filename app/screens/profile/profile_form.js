import React, { Component, useState, useRef } from 'react';
import {
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

import realm from '../../db/schema';
import User from '../../utils/user';
import Sidekiq from '../../utils/models/sidekiq';
import {Colors} from '../../assets/style_sheets/main/colors';

import ScrollableHeader from '../../components/scrollable_header';
import { Content, Icon, Button } from 'native-base';
import FooterBar from '../../components/footer/FooterBar';
import { CommonActions } from '@react-navigation/native';
import FormScreen from './Form';
import { reset } from '../StackNav/RootNavigation.js';

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/features/user/userSlice';

let formError = {};

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: User.getCurrent(),
      errors: {},
    }

    if (Platform.OS == 'android') {
      StatusBar.setBackgroundColor(Colors.grayStatusBar);
      StatusBar.setBarStyle('dark-content');
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', (payload) => this.componentDidFocus(payload));
  }

  componentDidFocus() {
    this._handleIfUserLogout();
    this.user = this._buildData();
  }

  componentWillUnmount() {
    !!this._unsubscribe && this._unsubscribe();
  }

  _handleIfUserLogout() {
    if (!User.getCurrent()) {
      reset({ routeName: 'ProfileScreen' });
    }
  }

  _skip() {
    try {
      realm.write(() => {
        realm.create('User', { uuid: User.getID(), grade: 'other'}, true);
        // Todo:
        // Sidekiq.create(User.getID(), 'User');
        reset({ routeName: this.props.route.params.from })
      });


    } catch (e) {
      alert(e);
    }
  }

  _setUserState = (field, value) => {
    this.user[field] = value;
    this.setState({...this.state, user: this.user});
  }

  checkRequire(field) {
    let value = this.state.user[field];
    if ( value == null || !value.length) {
      formError[field] = ["មិនអាចទទេបានទេ"];
    } else {
      delete formError[field];
    }
    this.setState({errors: formError})
  }

  isValidForm() {
    fields = [ 'fullName', 'dateOfBirth', 'provinceCode', 'districtCode', 'highSchoolCode'];
    for (var i = 0; i < fields.length; i++) {
      this.checkRequire(fields[i]);
    }

    return Object.keys(formError).length == 0;
  }

  handleSubmit() {
    if (!this.isValidForm()) {
      return this.refs.toast.show('សូមបំពេញព័ត៌មានខាងក្រោមជាមុនសិន...!', DURATION.SHORT);
    }

    try {
      realm.write(() => {
        user = realm.create('User', this._buildData(), true);
        Sidekiq.create(this.state.user.uuid, 'User');
        reset({ routeName: this.props.route.params.from });
      });
    } catch (e) {
      alert(e);
    }
  }

  _buildData() {
    let fields = ['uuid', 'fullName', 'sex', 'dateOfBirth', 'phoneNumber', 'highSchoolCode', 'provinceCode', 'districtCode', 'communeCode', 'grade'];
    let obj = {};

    for(i=0; i<fields.length; i++) {
      obj[fields[i]] = this.state.user[fields[i]];
    }
    obj.grade = obj.grade || '9'

    return obj;
  }

  _renderContent = () => {
    return (
      <View style={{padding: 16}}>
        <FormScreen
          errors={this.state.errors}
          user={this.state.user}
          _setUserState={this._setUserState}
        />
      </View>
    )
  }

  _renderNavigation = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}} />

        <Button transparent onPress={() => this._skip()}>
          <Text style={{color: Colors.blue}}>រំលង</Text>
          <Icon name='ios-arrow-forward' style={{color: Colors.blue}} />
        </Button>
      </View>
    )
  }

  render() {
    let title = 'បំពេញប្រវត្តិរូបសង្ខេប';

    return (
      <View style={{flex: 1}}>
        <ScrollableHeader
          style={{backgroundColor: '#fff'}}
          renderContent={ this._renderContent }
          renderNavigation={ this._renderNavigation }
          title={title}
          largeTitle={title}
        />

        <Toast ref='toast' positionValue={ Platform.OS == 'ios' ? 120 : 140 }/>
        <FooterBar icon='keyboard-arrow-right' text='រក្សាទុក' onPress={() => this.handleSubmit()} />
      </View>
    )
  }
}
