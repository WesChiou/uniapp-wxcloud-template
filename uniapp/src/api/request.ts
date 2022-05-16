// https://uniajax.ponjs.com/
import ajax from 'uni-ajax';

// 全局配置baseURL
const instance = ajax.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 请求拦截器
instance.interceptors.request.use(
  // 发送请求前配置
  (config) => {
    console.log('instance.interceptors.request:', config);
    return config;
  },
  // 请求错误时执行
  (error) => {
    console.error('instance.interceptors.request:', error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  // 处理响应数据
  (response) => {
    console.log('instance.interceptors.response:', response);
    return response;
  },
  // 错误时执行
  (error) => {
    console.error('instance.interceptors.response:', error);
  },
);

export default instance;
