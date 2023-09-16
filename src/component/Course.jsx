import { useEffect } from "react";
import { useState } from "react";
import Maincourse from "./course/Maincourse";
import propTypes from 'prop-types'

const Course = ({handelerselecetd}) => {
    const [course, setcourse] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])

    // const handelerselecetd=() selected=>{
    //     console.log(selected);
    // }
    return (
        <div className="w-3/4 mt-10 ">
            
            <div className="grid lg:grid-cols-3">

            {
               course.map(courseone => <Maincourse key={courseone.id} singleCourse={courseone} handelerselecetd={handelerselecetd}></Maincourse>) 
               
             }
            </div>
        </div>
    );
};
Course.propTypes={
    handelerselecetd:propTypes.func 
}
export default Course;