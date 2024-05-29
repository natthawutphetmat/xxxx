import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const MyComponent = () => {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://apipixcel.adsdep.com/get")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('ไม่สามารถดึงข้อมูลได้');
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const requestData = { name: name, item: item };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData)
    };

    fetch("https://apipixcel.adsdep.com/add", requestOptions)
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'สำเร็จ!',
            text: 'การดำเนินการเสร็จสมบูรณ์'
          });
          fetchData();
        } else {
          throw new Error('ไม่สามารถดำเนินการได้');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    fetch(`https://apipixcel.adsdep.com/delete/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'สำเร็จ!',
            text: 'การลบข้อมูลเสร็จสมบูรณ์'
          });
          fetchData();
        } else {
          throw new Error('ไม่สามารถดำเนินการได้');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form className='pixcel' onSubmit={handleSubmit}>
        <input
          type="hidden"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className='form-control mt-3'
         
        />
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="pixcel"
          className='form-control mt-3'
          required
        />
        <button type="submit" className='btn btn-success mt-3'>Submit</button>
     

      <div className="mt-3">
         Data
        <ul>
          {data.map((item) => (
            <li key={item.id}>
             <div>name: {item.name} </div>
             <div>pixcel: {item.item}</div>
              <button onClick={() => handleDelete(item.id)} className="btn btn-danger m-2">X</button>
              <hr />
            </li>
          
          ))}
        </ul>
      </div>
      </form>
    </>
  );
};

export default MyComponent;
