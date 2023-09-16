
import { useState } from 'react'
import './App.css'
import Bookmark from './component/Bookmark/Bookmark'
import Course from './component/course'
import Hours from './component/hours/Hours';
import { toast } from 'react-toastify';
function App() {

  const [bookmark, setbookmark] = useState([]);

 
  const handelerselecetd = selected => {
     const isExested= bookmark.find ((item) => item.id== Course.id);
     if (isExested){
     return toast('already added')
     }
     else{
      const bookmarkbtn = [...bookmark, selected];
      setbookmark(bookmarkbtn);
     }
    

  
  }
  

 

  return (
    <>
      <h1 className='text-center text-4xl text-bold'>Course Registration</h1>
      <div className='grid lg:flex   gap-4'>
        <Course handelerselecetd={handelerselecetd}></Course>
        <div className='mt-12'>
          <div>
          <h2 className="text-xl font-red mb-2 ">Credit Hours Remaining</h2> 
          </div>
       
          <Bookmark bookmark={bookmark}> </Bookmark>
          <Hours></Hours>
        </div>

      </div>


    </>
  )
}

export default App
