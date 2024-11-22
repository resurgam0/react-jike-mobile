import { http } from "@/utils";
import type { ResType } from "./shared";
type ChannelRes = {
    channels: { id: number; name: string}[]
}
export function fetchChannelAPI(){
    return http.request<ResType<ChannelRes>>({
        url: '/channels'
    })
}