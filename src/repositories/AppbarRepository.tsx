import axios from 'axios';
import {IMeInfo} from '../context/appbarContext/types';

const getMeInfo = () => {
    return axios.get<IMeInfo>('api/users/me');
}

const AppbarRepository = {
    getMeInfo,
};

export default AppbarRepository;