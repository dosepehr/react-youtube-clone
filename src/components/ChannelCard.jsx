import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
function ChannelCard({ channelDetail }) {
    return (
        <div className='flex items-center justify-center text-center w-full h-full '>
            {Object.keys(channelDetail).length > 0 && (
                <Link to={`/channel/${channelDetail.id.channelId}`}>
                    <img
                        src={channelDetail.snippet.thumbnails.high.url}
                        alt=''
                        className='rounded-full w-1/2  mx-auto'
                    />
                    <div className='text-Textgray text-xl mt-10 flex items-center justify-center space-x-2 '>
                        <span>{channelDetail.snippet.title} </span>
                        <span>
                            <BsFillCheckCircleFill />
                        </span>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default ChannelCard;
