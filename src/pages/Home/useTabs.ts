import { fetchChannelAPI } from "@/apis/list";
import type { ChannelItem } from "@/apis/list";
import { useEffect, useState } from "react";

function useFetchChannels(){
    const [channels, setChannels] = useState<ChannelItem[]>([])
    useEffect(()=>{
        async function getChannles(){
            try {
                const {data} = await fetchChannelAPI()
                setChannels(data.data.channels)
            } catch (error) {
              throw new Error('fetch channels error')  
            }
        }
        getChannles()
    }, [])
    return {
        channels
    }
}
export {
    useFetchChannels
}