import { combineReducers } from "redux";
// all import 
import { all } from 'redux-saga/effects';
import auth,{ authSaga } from "./auth";
// loading import
import loading from "./loading";
// user import
import user,{ userSaga } from "./user";
// loading add
const rootReducer = combineReducers({
    auth,
    loading ,
    user
});

export function* rootSaga(){
    // all 은 배열안에 있는 모든 제너레이터 함수들이 병행적으로 동시에 실행되고, 전부 이행될 때까지 기다림.
    // Promise.all 과 비슷하다고 해서 찾아보니 모든 것들이 이행될 때까지 기다리고 하나라도 에러가 나면 모든 Promise는 무시가 되고, catch 문 실행한다니 이와 비슷할듯
    yield all([authSaga(),userSaga()]);
}

export default rootReducer;