import { createStore, combineReducers } from 'redux';
import companyReducer from '../reducers/companyReducer';
import userReducer from '../reducers/userReducer';
import counterReducer from '../reducers/counterReducer';
import RandomNumber from '../../components/RandomNumber';
import Profile from '../../components/Profile';
import Bai6 from '../../components/Bai6';
import Login from '../../components/Login';
import Register from '../../components/Register';


// Gộp reducer (sau này có nhiều bài thì thêm vào đây)
const rootReducer = combineReducers({
    profile: Profile,
    users: userReducer,
    counter: counterReducer, 
    random: RandomNumber,
    company: companyReducer,
    bai6: Bai6,
    login: Login,
    register: Register,


});

// Tạo store
const store = createStore(rootReducer);

// Xuất type RootState để useSelector có type
export type RootState = ReturnType<typeof rootReducer>;

export default store;
