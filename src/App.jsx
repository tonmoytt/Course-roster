
import { useState } from 'react'
import './App.css'
import Bookmark from './component/Bookmark/Bookmark'
import Course from './component/course'
 
import Swal from 'sweetalert2'
function App() {

  const [bookmark, setbookmark] = useState([]);
  const [remining,setremining]=useState(20)
  const [addhours,setaddhours]=useState(0)
  const [totaldollar,settotaldollar]=useState(0)


  const handelerselecetd = selected => {
    const isExested = bookmark.find((item) => item.id === selected.id);
    let count =selected.reading_time;
    let Dollar =selected.price;

    if (isExested) {
      return Swal.fire(
        ' Sorry, this file',
        ' already added'
      )
    }
    else {

      bookmark.forEach((item) => {
        count = count + item.reading_time;
      });

      bookmark.forEach((item) => {
        Dollar = Dollar + item.price;
      });
      settotaldollar(Dollar);
      
      setaddhours(count);
      const removehours= 20-count;
      setremining(removehours);

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
            <h2 className="text-xl font-red mb-2 ">Credit Hours Remaining : {remining}</h2>
          </div>

          <Bookmark bookmark={bookmark}> </Bookmark>
          <div>
          <h2 className="text-2xl mb-3 mt-6">Total credit Hours :{addhours}</h2>
          </div>
          <div className='text-2xl mt-6 '>
            <h2 className='mb-4'>Total cost :{totaldollar}</h2>
            <hr />
          </div>
        
        </div>

      </div>


    </>
  )
}

export default App
