import myrouter from '../AxiosInitializer';
const getServerAPI = async() => await myrouter.get('/')

export { getServerAPI };
