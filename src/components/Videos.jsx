import { useEffect } from 'react';
import { fetchData } from '../Services';
import { VideoCard, ChannelCard } from './index.js';
function Videos({ selectedCategory, videos, setVideos }) {
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await fetchData(
                    `search?part=snippet&q=${selectedCategory}`
                );
                setVideos(data.items);
            } catch (err) {
                console.log(err.message);
            }
        }
        getData();
    }, [selectedCategory]);
    return (
        <>
            <div className='w-10/12 bg-black px-5'>
                <div className='space-x-2'>
                    <span className='text-white font-bold text-3xl'>
                        {selectedCategory}
                    </span>
                    <span className='text-Mainred font-bold text-3xl'>
                        videos
                    </span>
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {videos.map((item, index) => (
                                <div>
                                    {item.id.videoId && (
                                        <VideoCard video={item} key={index} />
                                    )}
                                    {item.id.channelId && (
                                        <ChannelCard
                                            channelDetail={item}
                                            key={index}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                </div>
            </div>
        </>
    );
}

export default Videos;
