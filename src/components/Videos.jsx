import { useEffect, useState } from 'react';
import { fetchData } from '../Services';
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
    console.log(videos);
    return (
        <>
            <div className='w-10/12 bg-black px-5'>
                <div className='space-x-2'>
                    <span className='text-white font-bold text-3xl'>
                        {selectedCategory}
                    </span>
                    <span className='text-red font-bold text-3xl'>videos</span>
                    {
                        videos.map((video, index) => (
                            <p className='bg-red' >video</p>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Videos;
