import {  FaBookOpen } from 'react-icons/fa';
const Maincourse = ({props}) => {
    const {cover_img,title,description,price,reading_time}=props;
    return (
        <div className="mx-6 mt-4">
            <img className="mt-4" src= {cover_img} alt="" />
            <h2 className="text-3xl mt-4">{title}</h2>
            <p><small className="mt-4"> {description}</small></p>
            <div className='flex justify-between'>
            <p className="text-lg mt-4">$ price :{price}</p>
            <div >
            <p className='mt-4'><FaBookOpen></FaBookOpen></p></div>
            <div>
            <small className="  text-lg mt-4">Credit : {reading_time}hr</small></div>
            </div>
            
               <button className=" bg-blue-500 px-28 mb-4 mt-4 rounded-lg py-2 text-lg">Select</button>
             
         
            
        </div>
    );
};

export default Maincourse;