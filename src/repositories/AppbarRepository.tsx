import axios from 'axios';
import {IMeInfo} from '../context/appbarContext/types';

const getMeInfo = (basePath: string) => {
    const url = "api/users/me";//`${basePath === '/' ? '' : basePath}/api/users/me`;
    console.log(basePath, 'her er den Linda!')
    return axios.get<IMeInfo>(url);
}

const AppbarRepository = {
    getMeInfo,
};

export default AppbarRepository;