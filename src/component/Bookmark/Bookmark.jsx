
import PropTypes from 'prop-types'

const Bookmark = ({bookmark,remining}) => {
    // console.log(bookmark);
     
    return (
        <div className=" mt-10 rounded-lg shadow-xl p-4">
          <h2 className="text-xl font-red mb-2 ">Credit Hours Remaining : {remining}</h2> 
           <h2 className="font-bold text-3xl p-2"> Course Name </h2>
       <hr /> 
       
       <div>
        {bookmark?.map((course, index) => <ol key={index}>{index + 1}. {course.title}</ol>)}
       </div>
       </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.array,
     
}
export default Bookmark;