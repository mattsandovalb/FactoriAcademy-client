import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const url = 'http://localhost:8000/api/courses'

const CreateCourse = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [poster, setPoster] = useState('');
    const [level, setLevel] = useState('');
    const navigate = useNavigate();

    const save = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("tech", tech);
        formData.append("poster", poster);
        formData.append("level", level);

        await axios.post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
      
          navigate('/coursesprotected');
        };

  return (
    <div>
        <h3>Create</h3>
        <form onSubmit={save}>
            <div className='mb-3'>
                <label className='form-label'> TITLE </label>
                <input 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> DESCRIPTION </label>
                <input 
                value={description} 
                onChange={(e)=> setDescription(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> TECH </label>
                <input 
                value={tech} 
                onChange={(e)=> setTech(e.target.value)} 
                type="text"  className='form-control'/>
            </div><div className='mb-3'>
                <label className='form-label'> POSTER </label>
                <input 
                value={poster} 
                onChange={(e)=> setPoster(e.target.value)} 
                type="file"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> LEVEL </label>
                <input 
                value={level} 
                onChange={(e)=> setLevel(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>SAVE</button>
        </form>
    </div>
  )
}

export default CreateCourse;