
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'; // Adjust the import path based on your project structure

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div style={{ backgroundColor: 'rgba(17, 17, 17, 0.05)' }} className="md:w-1/3 text-center rounded-lg  ml-4 mt-2 pt-7">
    <div>
     <h3 className='text-4xl'>Reading Time:{readingTime} </h3>
    </div>

    <h2 className="text-2xl text-left pl-6">Bookmarked Blogs: {bookmarks.length}</h2>

{
    bookmarks.map((bookmark, idx) => <Bookmark key ={idx} bookmark ={bookmark}></Bookmark>)
}
</div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number


}

export default Bookmarks





