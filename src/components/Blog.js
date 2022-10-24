import React from 'react';

const Blog = () => {
    return (
        <section>
            <h3 className='text-2xl text-center text-purple-600'>Welcome to my Blog Component</h3>
            <div className='p-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
                </div>
            </div>

            <div className='p-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
                </div>
            </div>

            <div className='p-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
                </div>
            </div>

            <div className='p-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
                </div>
            </div>

        </section>
    );
};

export default Blog;