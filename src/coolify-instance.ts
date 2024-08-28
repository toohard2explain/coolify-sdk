import {
  DisableApiResponse,
  EnableApiResponse,
  ServerCreateApiRequest,
  ServerCreateApiResponse,
  ServerGetApiResponse,
  ServerListApiResponse,
  ServerUpdateApiRequest,
  ServerUpdateApiResponse,
} from './request-data';

export class CoolifyInstance {
  options: CoolifyInstanceOptions;
  token: string;

  constructor(token: string, options: CoolifyInstanceOptions) {
    this.token = token;
    this.options = options;
  }

  // BASIC API CALLS
  async healthCheck(): Promise<boolean> {
    const response = await this.request('/health-check', 'GET');
    const text = await response.text();
    return text === 'OK';
  }

  async version(): Promise<string> {
    const response = await this.request('/version', 'GET');
    return response.text();
  }

  async enable(): Promise<EnableApiResponse> {
    const response = await this.request('/enable', 'GET');
    return response.json();
  }

  async disable(): Promise<DisableApiResponse> {
    const response = await this.request('/disable', 'GET');
    return response.json();
  }

  // SERVER API CALLS
  async listServers(): Promise<ServerListApiResponse> {
    const response = await this.request('/servers', 'GET');
    return response.json();
  }

  async getServer(uuid: string): Promise<ServerGetApiResponse> {
    const response = await this.request(`/servers/${uuid}`, 'GET');
    return response.json();
  }

  async createServer(
    server: ServerCreateApiRequest
  ): Promise<ServerCreateApiResponse> {
    const response = await this.request('/servers', 'POST', server);
    return response.json();
  }

  async updateServer(
    uuid: string,
    server: ServerUpdateApiRequest
  ): Promise<ServerUpdateApiResponse> {
    const response = await this.request(`/servers/${uuid}`, 'PATCH', server);
    return response.json();
  }

  async deleteServer(uuid: string): Promise<DisableApiResponse> {
    const response = await this.request(`/servers/${uuid}`, 'DELETE');
    return response.json();
  }

  // BASE METHOD
  private request(
    path: string,
    method: 'GET' | 'PATCH' | 'POST' | 'DELETE',
    body?: any
  ): Promise<Response> {
    path = path.startsWith('/') ? path : `/${path}`;

    const url = `${this.options.secure ? 'https' : 'http'}://${
      this.options.host
    }/api/v1${path}`;
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }
}

export interface CoolifyInstanceOptions {
  host?: string;
  secure?: boolean;
  timeout?: number;
}
