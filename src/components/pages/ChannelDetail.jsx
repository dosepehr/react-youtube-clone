import { useEffect, useContext } from 'react';
import { mainContext } from '../../context';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../Services';
import { VideoCard } from '../index';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Helmet } from 'react-helmet-async';

function ChannelDetail() {
    const { channel, setChannel, videos, setVideos } = useContext(mainContext);
    const { id } = useParams();
    useEffect(() => {
        async function getData() {
            try {
                const { data: channelData } = await fetchData(
                    `channels?part=snippet&id=${id}`
                );
                const { data: videosData } = await fetchData(
                    `search?channelId=${id}&part=snippet%2Cid&order=date`
                );
                setChannel(channelData?.items[0]);
                setVideos(videosData?.items);
            } catch (err) {
                console.log(err.message);
            }
        }
        getData();
    }, [id]);
    return (
        <>
            <Helmet>
                {channel && <title>YouTube - {channel.snippet.title}</title>}
            </Helmet>
            <div className='bg-black'>
                <div className='w-full h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-10'></div>
                {channel && (
                    <>
                        <img
                            src={channel.snippet.thumbnails.high.url}
                            alt=''
                            className='rounded-full w-40 -mt-[80px] mx-auto'
                        />
                        <div className='text-Textgray text-xl mt-10 flex items-center justify-center space-x-2 '>
                            <span>{channel.snippet.title}</span>
                            <span>
                                <BsFillCheckCircleFill />
                            </span>
                        </div>
                    </>
                )}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10'>
                    {videos.map((item, index) => (
                        <div>
                            {item.id.videoId && (
                                <VideoCard key={index} video={item} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ChannelDetail;
