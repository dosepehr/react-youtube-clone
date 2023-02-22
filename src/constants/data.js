// ! icons
import { HiOutlineHome } from 'react-icons/hi';
import { BsCodeSlash, BsMusicNote, BsCurrencyBitcoin } from 'react-icons/bs';
import { SiGooglepodcasts } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact, FaTheaterMasks } from 'react-icons/fa';
import { BiCameraMovie, BiGame } from 'react-icons/bi';
import { DiJavascript1 } from 'react-icons/di';
import { GiGymBag } from 'react-icons/gi';
import {
    MdLiveTv,
    MdCheckroom,
    MdFaceRetouchingNatural,
    MdSchool,
    MdSportsTennis,
} from 'react-icons/md';
export const categories = [
    { name: 'New', icon: <HiOutlineHome /> },
    { name: 'Javascript', icon: <DiJavascript1 /> },
    { name: 'Coding', icon: <BsCodeSlash /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'NextJS', icon: <TbBrandNextjs /> },
    { name: 'Music', icon: <BsMusicNote /> },
    { name: 'Education', icon: <MdSchool /> },
    { name: 'Podcast', icon: <SiGooglepodcasts /> },
    { name: 'Movie', icon: <BiCameraMovie /> },
    { name: 'Gaming', icon: <BiGame /> },
    { name: 'Live', icon: <MdLiveTv /> },
    { name: 'Sport', icon: <MdSportsTennis /> },
    { name: 'Fashion', icon: <MdCheckroom /> },
    { name: 'Beauty', icon: <MdFaceRetouchingNatural /> },
    { name: 'Comedy', icon: <FaTheaterMasks /> },
    { name: 'Gym', icon: <GiGymBag /> },
    { name: 'Crypto', icon: <BsCurrencyBitcoin /> },
];

// ! logo
export const MainLogo = '/assets/logo.png';
