import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
function VideoCard({ video }) {
    console.log(video);
    return (
        <>
            {Object.keys(video).length > 0 && (
                <div>
                    <Link
                        to={
                            video.id.videoId ? `/video/${video.id.videoId}` : ''
                        }
                    >
                        <div>
                            <img
                                className='w-full'
                                src={video.snippet.thumbnails.high.url}
                                alt={video.snippet.title}
                            />
                        </div>
                    </Link>
                    <div className='bg-Maingray min-h-[100px] p-2'>
                        <Link
                            to={
                                video.id.videoId
                                    ? `/video/${video.id.videoId}`
                                    : ''
                            }
                        >
                            <p className='text-Textgray'>
                                {video.snippet.title.slice(0, 60)}...
                            </p>
                        </Link>
                        <Link to={`channel/${video.snippet.channelId}`}>
                            <div className='text-[#aaa] mt-2 flex items-center space-x-2'>
                                <p>{video.snippet.channelTitle}</p>
                                <p>{<BsFillCheckCircleFill />}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default VideoCard;
