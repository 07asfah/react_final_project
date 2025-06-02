import React from 'react';
import blogTopImage from '../assets/images/articles/blog_top.jpg'; 

const Blog = () => {
    return (
        <>
            <section 
                className="flex flex-col items-center justify-center py-20"
                style={{
                    backgroundImage: `url(${blogTopImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h2 className="text-4xl text-white font-medium text-center">
                    Blog
                </h2>
            </section>
            
            <div className="container mx-auto px-4 py-12">
                {/* Add your blog content here */}
            </div>
        </>
    );
};

export default Blog;
