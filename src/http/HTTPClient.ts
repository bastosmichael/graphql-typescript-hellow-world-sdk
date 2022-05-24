/**
 * Defines the basic operations for an HTTP client.
 */
export default interface HTTPClient {
  get(url: string, headers: object): Promise<any>;
  post(url: string, input: object, headers: object): Promise<any>;
}
