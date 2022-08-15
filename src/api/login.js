import { httppost } from '@/utils/request';

const login = (account, password) => httppost('url', { account, password });

export default login;
