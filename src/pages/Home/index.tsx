import { Tabs } from 'antd-mobile'
import HomeList from './HomeList'
import './style.css'
import { useFetchChannels } from './useTabs'
const Home = ()=>{
    const {channels} = useFetchChannels()
    return (
        <div className='tabContainer'>
            <Tabs defaultActiveKey="0">
                {channels.map((item)=>(
                    <Tabs.Tab title={item.name} key={item.id}>
                        <div className='listContainer'>
                            {/* HomeList列表 */}
                            <HomeList channelId={'' + item.id}/>
                        </div>
                    </Tabs.Tab>
                ))}
            </Tabs>
        </div>
    )
}
export default Home