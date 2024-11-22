import { fetchChannelAPI } from "@/apis/list"
import { useEffect } from "react"
const List = ()=>{
    useEffect(()=>{
       fetchChannelAPI().then((res)=>{
        console.log(res.data.data.channels, '+++++')
       }) 
    }, [])
    return <div>this is List</div>
}
export default List