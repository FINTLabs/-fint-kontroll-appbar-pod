import axios from 'axios';
import {IMeInfo} from '../context/appbarContext/types';

const getMeInfo = (basePath: string) => {
    const url = `${basePath === '/' ? '' : basePath}/api/users/me`;
    return axios.get<IMeInfo>(url);
}

const AppbarRepository = {
    getMeInfo,
};

export default AppbarRepository;