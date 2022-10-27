import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-sabbirvai.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3 className='text-center'>All Courses: {categories.length}</h3>
            <hr />
            <div>
                {
                    categories.map(category => <p key={category.id} className="bg-success text-white p-2 rounded text-center">
                        <Link to={`/category/${category.id}`} className="text-white category">{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;