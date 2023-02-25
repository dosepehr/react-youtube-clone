import { useEffect, useContext } from 'react';
import { mainContext } from '../../context';
import { VideoCard, ChannelCard } from '../index';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../Services';
function SearchFeed() {
    const { videos, setVideos } = useContext(mainContext);
    const { searchQuery } = useParams();
    console.log(searchQuery);
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await fetchData(
                    `search?part=snippet&q=${searchQuery}`
                );
                setVideos(data.items);
            } catch (err) {
                console.log(err.message);
            }
        }
        getData();
    }, [searchQuery, setVideos]);
    return (
        <>
            <div className='bg-black pt-16 px-10'>
                <div className='fixed w-full z-40 bg-black py-3 space-x-2 '>
                    <span className='text-white font-bold text-3xl'>
                        Search Resualt for
                    </span>
                    <span className='text-Mainred font-bold text-3xl'>
                        {searchQuery}
                    </span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {Object.keys(videos).length > 0 &&
                        videos.map((item, index) => (
                            <div key={index}>
                                {item.id.videoId && <VideoCard video={item} />}
                                {item.id.channelId && (
                                    <ChannelCard channelDetail={item} />
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default SearchFeed;
