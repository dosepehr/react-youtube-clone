import { useContext } from 'react';
import { mainContext } from '../../context';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
    const { query, setQuery } = useContext(mainContext);
    const navigate = useNavigate();
    const handleSearch = (query) => {
        if (query) {
            navigate(`/search/${query}`);
            setQuery('');
        }
    };
    return (
        <>
            <div className='relative'>
                <input
                    type='text'
                    className='max-w-[320px] sm:w-[450px] ml-5 h-10 rounded-full px-4 '
                    placeholder='Search...'
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    value={query}
                />
                <button
                    type='submit'
                    className='absolute right-5 bottom-[0.8rem] text-Mainred text-xl'
                    onClick={() => {
                        handleSearch(query);
                    }}
                >
                    <BiSearchAlt2 />
                </button>
            </div>
        </>
    );
}

export default SearchBar;
