export interface EnableApiResponse {
  message: string;
}

export interface DisableApiResponse {
  message: string;
}

export interface ServerListApiResponse {
  servers: ServerApiObject[];
}

export interface ServerGetApiResponse extends ServerApiObject {}

export interface ServerCreateApiRequest {
  name: string;
  description: string;
  ip: string;
  port: number;
  user: string;
  private_key_uuid: string;
  is_build_server: boolean;
  is_validate: boolean;
}

export interface ServerCreateApiResponse {
  uuid: string;
}

export interface ServerUpdateApiRequest extends ServerCreateApiRequest {}

export interface ServerUpdateApiResponse extends ServerApiObject {}

export interface ServerDeleteApiResponse {
  message: string;
}

// Object from the server API
export interface ServerApiObject {
  id: number;
  uuid: string;
  name: string;
  description: string;
  ip: string;
  user: string;
  port: number;
  proxy: ProxyApiObject | {};
  high_disk_usage_notification_sent: boolean;
  unreachable_notification_sent: boolean;
  unreachable_count: number;
  validation_logs: string;
  log_drain_notification_sent: boolean;
  swarm_cluster: string;
}

export interface ProxyApiObject {}
