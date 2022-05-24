import axios from 'axios';
import HTTPClient from './HTTPClient';

export default class Axios implements HTTPClient {
  // eslint-disable-next-line class-methods-use-this
  async get(url: string, headers: object): Promise<any> {
    const response: any = await axios.get(url, {
      headers: {
        ...headers,
      },
    });

    return this.handleResponse(response);
  }

  async post(url: string, input: object, headers: object): Promise<any> {
    const response: any = await axios.post(url, input, {
      headers: {
        ...headers,
      },
    });

    return this.handleResponse(response);
  }

  private handleResponse(response: any) {
    // TODO: Add an error handler
    if (response.status >= 400 && response.status < 500) {
      console.log('Client error');
    } else if (response.status >= 500 && response.status < 600) {
      console.log('Server error');
    }
    return response;
  }
}
