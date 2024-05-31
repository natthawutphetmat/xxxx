
import React, { useEffect, useState } from 'react';


const UploadPage = () => {
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
 

   
    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < event.target.files.length; i++) {
            formData.append('files', event.target.files[i]);
        }

        try {
            const response = await fetch('https://bot.adsdep.com/api/upload', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            setMessage(result.message);
            setFiles(result.data.uploadedFiles);

            fetchUploadedFiles();
        } catch (error) {
            console.error('Error uploading files:', error);
            setMessage('Error uploading files');
        }
    };

    const fetchUploadedFiles = async () => {
        try {
            const response = await fetch('https://bot.adsdep.com/api/get');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching uploaded files:', error);
        }
    };

    useEffect(() => {
        fetchUploadedFiles();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://bot.adsdep.com/api/delete/${id}`, {
                method: 'DELETE'
            });

            const result = await response.json();
            setMessage(result.message);

            fetchUploadedFiles();
        } catch (error) {
            console.error('Error deleting file:', error);
            setMessage('Error deleting file');
        }
    };

    return (
        <div className="container text-center mt-5">
       
        
        
         



            
            <div className="boximg"> 
            <h1>Upload Files</h1>
            <form onSubmit={handleUpload}>
                <input type="file" multiple onChange={handleUpload} />
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
            {message && <p>{message}</p>}
            {files && files.length > 0 && (
                <div>
                    <h2>Uploaded files:</h2>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>{file.filename}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                        <div key={index} className="item">
                            <img src={`https://bot.adsdep.com/${item.url}`} alt={item.filename} />

                          <div>  <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default UploadPage;
