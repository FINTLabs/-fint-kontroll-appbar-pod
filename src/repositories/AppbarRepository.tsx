import axios from 'axios';
import {IMeInfo} from '../context/appbarContext/types';

const getMeInfo = () => {
    const url = "api/users/me";//`${basePath === '/' ? '' : basePath}/api/users/me`;
    console.log('her er den Linda!')
    return axios.get<IMeInfo>(url);
}

const AppbarRepository = {
    getMeInfo,
};

export default AppbarRepository;