import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const url = 'http://localhost:8000/api/courses/';

const UpdateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [poster, setPoster] = useState(null);
  const [level, setLevel] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}${id}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setTech(response.data.tech);
      setPoster(response.data.poster);
      setLevel(response.data.level);
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
     
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tech', tech);
        formData.append('poster', poster);
        formData.append('level', level);

        axios.put(`http://localhost:8000/api/courses/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error.response.data);
        });

        navigate('/coursesprotected');
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  return (
    <div>
      <h3>Update</h3>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">TITLE</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">DESCRIPTION</label>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">TECH</label>
          <input
            value={tech}
            onChange={(event) => setTech(event.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">POSTER</label>
          <input
            onChange={(event) => setPoster(event.target.files[0])}

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

export default UpdateCourse;