import { useEffect, useContext } from 'react';
import { mainContext } from '../../context';
import { fetchData } from '../../Services';
import { VideoCard, ChannelCard } from '../index.js';
function Videos() {
    const { selectedCategory, videos, setVideos } = useContext(mainContext);
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
            <div className='bg-black px-5 mt-16 '>
                <div className='fixed w-full z-40 bg-black py-3 space-x-2 '>
                    <span className='text-white font-bold text-3xl'>
                        {selectedCategory}
                    </span>
                    <span className='text-Mainred font-bold text-3xl'>
                        videos
                    </span>
                </div>
                <div className='space-x-2'>
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {videos.map((item, index) => (
                                <div key={index}>
                                    {item.id.videoId && (
                                        <VideoCard video={item} />
                                    )}
                                    {item.id.channelId && (
                                        <ChannelCard channelDetail={item} />
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
