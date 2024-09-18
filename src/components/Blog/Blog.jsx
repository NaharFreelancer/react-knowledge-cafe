import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {

    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags } =blog;

    return (
        <div className='mb-20 space-y-4 border-b-2 pb-8'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time}min read</span>
                    <button 
                    onClick={() =>handleAddToBookmark (blog)}
                    
                    className='ml-2 text-red-600 text-xl '><MdOutlineBookmarks /></button>
                </div>
                
            </div>
            <h2 className='text-xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>{hash}</a></span>)
                }
            </p>

            <button onClick={() =>handleMarkAsRead(id, reading_time)}
            className='text-purple-800 font-bold underline'>Mark as read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func

}

export default Blog;