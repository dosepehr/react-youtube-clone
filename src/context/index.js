import { createContext } from 'react';

export const mainContext = createContext({
    selectedCategory: 'new',
    setSelectedCategory: () => {},
    videos: [],
    setVideos: () => {},
    channel: null,
    setChannel: () => {},
    video: {},
    setVideo: () => {},
    query: '',
    setQuery: () => {},
});
