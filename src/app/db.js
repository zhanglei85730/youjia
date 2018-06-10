import nattyFetch from 'natty-fetch';
import { Toast } from 'saltui';

import { urlPrefix, isDev } from './variables';

// See https://github.com/Jias/natty-fetch for more details.
const context = nattyFetch.context({
  // mockUrlPrefix: urlPrefix,
  mockUrlPrefix: urlPrefix,
  urlPrefix,
  mock: isDev,
  // jsonp: true,
  withCredentials: false,
  traditional: true,
  data: {
    _tb_token_: '',
  },
  timeout: 5000,
  didFetch: () => Toast.hide(),
  // 请按照需要开启
  fit(response) {
    return {
      success: response.success,
      content: response.content,
      error: {
        errorMsg: response.errorMsg,
        errorCode: response.errorCode,
        errorLevel: response.errorLevel,
      },
    };
  },
});

context.create('SomeModuleAPI', {
  getSomeInfo: {
    mockUrl: 'query/getSomeInfo.json',
    url: 'query/getSomeInfo.json',
    willFetch() {
      Toast.show({
        type: 'loading',
        content: 'Loading',
      });
    },
  },
  getLocalData: {
    // mockUrl: 'query/getLocalData.json',    
    mockUrl: 'query/getLocalData',
    url: 'http://localhost:3003/news',
    // 请求前的回调
    willFetch() {
      Toast.show({
        type: 'loading',
        content: 'Loading',
      });
    },
    // 请求结束后的操作
    didFetch(vars, config) {
      console.log('请求完成');
    },
    // 数据结构预处理函数，接收完整的响应数据作为参数，只用于解决数据结构不一致的问题
    fit(response) {
      return {
        success: true,
        content: response,
      }
    },
    //请求成功时的数据处理函数，该函数接收到的参数是数据结构约定中content的值
    process(content){
      
    }
  },
});

export default context.api;
