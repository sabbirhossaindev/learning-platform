import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    
    return (
        <div className='flex justify-center items-center min-h-screen bg-indigo-500'>
            <div className='flex-1 max-w-5xl p-8'>
                
                <div className='grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense lg:grid-cols-3'>

                    <div className='row-span-full p-4 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2 text-center'>
                        <h2 className='text-lg font-semibold leading-6'>All Courses: {categories.length}</h2>
                        <hr />
                        {
                            categories.map(category => <p key={category.id}>
                                <Link to={`/courses/${category.id}`}>{category.name}</Link>
                            </p>)
                        }
                
                    </div>

                    <div className="card w-90 bg-base-100 shadow-sm">
                        <figure className="px-5 pt-5">
                            <img src="https://placeimg.com/400/225/arch" alt="courses" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">Download</button>
                            </div>
                        </div>
                    </div>


                    {/* <div className='p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                        <h2 className='text-lg font-semibold leading-6'>Home renovations</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className='p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                        <h2 className='text-lg font-semibold leading-6'>Home renovations</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className='p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                        <h2 className='text-lg font-semibold leading-6'>Home renovations</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className='p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                        <h2 className='text-lg font-semibold leading-6'>Home renovations</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                        <h2 className='text-lg font-semibold leading-6'>Home renovations</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur</p>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Courses;