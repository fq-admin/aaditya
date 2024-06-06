import Axios from 'axios';
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

function TestLink() {
  const [text, setText] = useState('');

  useEffect(() => {
    let text='loading...'
    while(text==='loading...') {
      Axios.get('http://localhost:3000/upload/testLink').then((res) => {
        setText(res.data);
      });
    }
  }, []);
  
  // Axios.get('http://localhost:3000/upload/testLink').then((res) => {
  //   setText(res.data);
  // });
  return (
  <div>
    <button><Link to='/' />Back</button>
    <textarea  name="" id="" defaultValue={text} readOnly/>

  </div>
  )
}

export default TestLink