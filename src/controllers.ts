// TODO: More 3rd party libraries will be supported.

import Axios from './http/Axios';

import HTTPClient from './http/HTTPClient';
import { Hello, Error } from './models';

export default class HelloWorld {
  private urlPrefix: string = 'http://0.0.0.0:4000';
  // TODO: The HTTPClient instance will change depending on what the user
  // selected.

  private http: HTTPClient = new Axios();

  /**
   * @summary List of all "The Lord of the Rings" books
   */
  async query(q: string): Promise<Hello | Error> {
    const queryParams: string[] = [];

    const query = `query { ${q} }`;

    let urlEndpoint = '/graphql';

    const url = this.urlPrefix + urlEndpoint + '?' + queryParams.join('&');

    const response: any = await this.http.post(url, {query: query}, {});

    switch (response.status) {
      case 200:
        return response.data; // of type

      default:
        return response.data; // of type
    }
  }
}
