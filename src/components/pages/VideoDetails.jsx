import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import ReactPlayer from 'react-player';
import { fetchData } from '../../Services';
import { VideoCard } from '../index';
function VideoDetails({ video, setVideo, videos, setVideos }) {
    const { videoId } = useParams();
    const [comments, setComments] = useState();
    useEffect(() => {
        async function getData() {
            try {
                const { data: videoData } = await fetchData(
                    `search?part=snippet&relatedToVideoId=${videoId}&type=video`
                );
                const { data: videosData } = await fetchData(
                    `search?part=snippet&relatedToVideoId=${videoId}&type=video`
                );
                setVideos(videosData.items);
                setVideo(videoData.items[0]);
            } catch (err) {
                console.log(err.message);
            }
        }
        getData();
    }, [videoId]);
    return (
        <>
            <div className='flex lg:flex-row justify-between items-center md:px-10 lg:items-start flex-col space-y-3'>
                {Object.keys(video).length > 0 && (
                    <div className='pt-20 mx-auto w-full flex justify-center'>
                        <div className=' flex flex-col w-3/4 justify-center'>
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                className='react-player'
                                controls
                                width='100%'
                            />
                            <div className='text-Textgray text-lg mt-4'>
                                <p className='text-Textgray text-lg mt-4'>
                                    {video.snippet.title}
                                </p>
                                <div className='flex items-center space-x-2'>
                                    <p > {video.snippet.channelTitle}</p>
                                    <p className='text-base'>
                                        <BsFillCheckCircleFill />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='h-[95vh] overflow-y-scroll scroll-hidden '>
                    <div className='flex flex-col'>
                        {Object.keys(videos).length > 0 &&
                            videos.map((item, index) => (
                                <VideoCard video={item} key={index} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoDetails;
