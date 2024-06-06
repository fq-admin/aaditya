
import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);

  // const navigate=useNavigate();
  const [text, setText] = useState('');
  const handleSubmitLink = async (event) => {
    event.preventDefault();
    
    // navigate('/testLink');
    try {
      setText('scraping website... this may take a while');
      const response = await axios.post('http://localhost:3000/upload/link', {link});
      console.log(response.data);
      setText(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    setText('fetching data...');
    try {
      const response = await axios.post('http://localhost:3000/upload/file', formData,{
        headers: {"Content-Type": "multipart/form-data"}
      });
      console.log(response.data);
      setText(response.data);
    } catch (error) {
      console.error(error);
    }
    // navigate('/testFile');
  };

  return (<>
  <div className='container'>
    <div className='heading'>
      <h2 >Store Data</h2>
    </div>
      <div className='container'>
          <form className='form' onSubmit={handleSubmitLink}>
          <label className='link-input'>
              Link:
              <input type="text" value={link} onChange={(e) => setLink(e.target.value)} required />
          </label>
          <button className='submit-button' type="submit">Test link</button>
          </form>
      </div>
      <div className='container'>
          <form className='form' onSubmit={handleSubmitFile}>
          <label className='file-input'>
              File:
              <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
          </label>
          <button className='submit-button' type="submit">Test pdf</button>
          </form>
      </div>
  </div>
    <textarea  name="" id="" defaultValue={text} readOnly/>
    </>
  );
};

export default Form;