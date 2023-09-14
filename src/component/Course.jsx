import { useEffect } from "react";
import { useState } from "react";
import Maincourse from "./course/Maincourse";
import './css/course.css'


const Course = () => {
    const [course, setcourse] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl text-bold mt'>Course Registration</h1>
            <div className="box">

            {
               course.map(courseone => <Maincourse key={course.post_date} props={courseone}></Maincourse>) 
             }
            </div>
        </div>
    );
};

export default Course;