import { all, takeEvery, takeLatest, put, fork, call } from 'redux-saga/effects'

import { getStorageItem, setStorageItem } from '../../helpers/functionsHelper'
import {auth, basicData, CHECK_AUTHORIZATION, SET_USER_BASIC_DATA } from './actions'
import { USER_AUTH, USER_EMAIL, USER_FIRST_NAME } from '../../helpers/constantsHelper'

export function* checkAuthorization() {
  yield takeEvery(CHECK_AUTHORIZATION, function*() {
      try {
          // Fetch user auth in loc&ale storage
          const user_auth = yield call(getStorageItem, USER_AUTH);
          // Parse
          const data = JSON.parse(user_auth);
          // Check auth
          if(data != null) {
              if(data) {
                  const user_email = yield call(getStorageItem, USER_EMAIL);
                  const user_firstName = yield call(getStorageItem, USER_FIRST_NAME);
                  // Store
                  yield put(basicData(JSON.parse(user_email), JSON.parse(user_firstName)));
              } else yield put(auth(data));
          }
          else yield put(auth(false));
      } catch (e) {
          // Store
          console.log(`Something when wrong ${e.toString()}`);
          yield put(auth(false));
      }
  });
}

export function* setUserBasicData() {
    yield takeLatest(SET_USER_BASIC_DATA, function*({email, firstName}) {
        try {
            // Save user data in storage
            yield call(setStorageItem, USER_AUTH, true);
            yield call(setStorageItem, USER_EMAIL, email);
            yield call(setStorageItem, USER_FIRST_NAME, firstName);
            // Store
            yield put(basicData(email, firstName));
        } catch (e) {
            // Store
            console.log(`Something when wrong ${e.toString()}`);
            yield put(auth(false));
        }
    });
}

export default function* saga() {
    yield all([
        fork(setUserBasicData),
        fork(checkAuthorization),
    ]);
}
