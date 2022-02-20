import axios from '../axios';
import { LoginReqType } from '../types';

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<void> {
    const { data } = await axios.post('/auth/login', reqData);

    return data;
  }

  public static async logout(): Promise<void> {
    // await axios.delete('', { headers: { Authorization: `Bearer ${token}` } });
    await axios.post('/auth/logout');
  }
}
