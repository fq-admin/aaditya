import Axios from 'axios';
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

function TestFile() {
  const [text, setText] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3000/upload/testFile').then((res) => {
      setText(res.data);
    });
  }, []);
  return (
  <div>
    <button><Link to='/' />Back</button>
    <textarea  name="" id="" defaultValue={text} readOnly/>

  </div>
  )
}

export default TestFile