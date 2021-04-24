// Functions for communicating with backend 

import { Config } from '../../config'; 
import axios, { AxiosResponse, AxiosError, AxiosPromise } from 'axios';

export interface LoginRequest {
  email: '',
  password: ''
}

export interface RegisterRequest {
  firstName: string, 
  lastName: string, 
  email: string, 
  username: string, 
  password: string
}

export default class WebAPI {
  static loginService(req: LoginRequest): AxiosPromise {
    return axios.post(`${Config.API_URL}/user/login`, req);
  }

  static registrationService(req: RegisterRequest): AxiosPromise {
    return axios.post(`${Config.API_URL}/user/register`, req);
  }
}