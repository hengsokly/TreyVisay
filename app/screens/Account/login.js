import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/features/user/userSlice';
import SigninForm from './SigninForm';
import { reset } from '../StackNav/RootNavigation.js';

export default function Login(props) {
  const currentUser = useSelector((state) => state.currentUser.value);
  const dispatch = useDispatch();

  const _isUserInfoCompleted = (user) => {
    return !!user && !!user.dateOfBirth;
  }

  const handleSignedIn = (user) => {
    dispatch(setCurrentUser(user));

    if (!_isUserInfoCompleted(user)) {
      return reset({ routeName: 'ProfileForm', params: {from: props.route.params.from} })
    }

    reset({ routeName: props.route.params.from });
  }

  return (
    <SigninForm
      route={props.route}
      handleSignedIn={handleSignedIn}
    />
  )
}
