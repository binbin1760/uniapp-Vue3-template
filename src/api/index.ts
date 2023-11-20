import { uniRequest } from '@/utils/unirequest';
export function test() {
  return uniRequest('/api/test', 'GET', '123');
}
