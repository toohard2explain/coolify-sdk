import { CoolifyInstance, CoolifyInstanceOptions } from './coolify-instance';

export const coolify = (
  token: string,
  options: CoolifyInstanceOptions = {
    host: 'app.coolify.io',
    secure: true,
    timeout: 5000,
  }
): CoolifyInstance => {
  return new CoolifyInstance(token, options);
};
