import { unirequest } from "@/utils/unirequest"
export function test() {
    return unirequest('/api/test', 'GET', '123')
}