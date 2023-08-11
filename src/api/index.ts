import { uniRequest } from "@/untils/unirequest"
export function test() {
    return uniRequest('/api/test', 'GET', '123')
}