import { FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Maincourse = ({ singleCourse,handelerselecetd }) => {
    const { cover_img, title, description, price, reading_time } = singleCourse;
    return (
        <div className=" mx-4 bg-red-200 rounded-lg mt-4 p-2 ">
            <img className="mt-4" src={cover_img} alt="" />
            <h2 className="text-lg mt-4">{title}</h2>
            <p><small className="mt-4"> {description}</small></p>
            <div className=' lg:flex justify-between'>
                <p className="text-lg mt-4">$ price :{price}</p>
                <div >
                    <button className='mt-6'><FaBookOpen></FaBookOpen></button></div>
                <div>
                    < p className="  text-lg mt-4">Credit : {reading_time}hr</ p></div>
            </div>

            <button id="myButton" onClick={ () => handelerselecetd(singleCourse)} className=" bg-blue-500 w-full mb-4 mt-4 rounded-lg py-2 text-lg">Select</button>
            <ToastContainer />
        </div>
    );
};

Maincourse.propTypes = {
    singleCourse: PropTypes.object.isRequired,
    handelerselecetd: PropTypes.func
}

export default Maincourse;