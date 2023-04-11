import React, { useEffect, useState } from 'react';



const Filter = () => {

    const [filter, setFilter] = useState([])

    useEffect( () =>{
        fetch('FeaturedJobs.json')
        .then(res => res.json())
        .then(data => setFilter(data))
    }, [])
    // console.log(filter)

    return (
        <div className='mt-10'>
            <select className='p-3 rounded-lg' name={filter.type1 ?.Remote} id="">
                <option value="all">Filter By</option>
                <option value="remote">Remote</option>
                <option value="full time">Full Time</option>
            </select>
        </div>
    );
};

export default Filter;