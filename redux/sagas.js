import { all } from 'redux-saga/effects';
//import auth from './auth/saga';

export default function* sagas(getState) {
    yield all([
        //auth()
    ]);
}
