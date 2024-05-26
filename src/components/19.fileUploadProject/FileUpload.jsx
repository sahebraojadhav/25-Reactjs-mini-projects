import React, { useRef, useState } from "react";
import './file-upload.css';


function FileUpload() {

    const[file,setFile]=useState();
    const uploadReference=useRef();
    const progressReference=useRef();
    const statusReference=useRef();
    const loadRefernce=useRef();

    

    function handleUploadFile(){
        const file=uploadReference.current.files[0];  //file selection
        console.log(file);
        setFile(URL.createObjectURL(file)); //URL.createObjectURL to create URL
        let formData=new FormData(); //prepare file upload
        formData.append('image',file)
        let xhr=new XMLHttpRequest();
        xhr.upload.addEventListener('progress',handleProgress,false)
        xhr.addEventListener('load',handleSuccess,false);
        xhr.addEventListener('error',handleError,false);
        xhr.addEventListener('abort',handleAbort,false);

        xhr.open('POST','https://v2.convertapi.com/upload');
        xhr.send(formData);
    }

    function handleProgress(event) {
        loadRefernce.current.innerHTML = `Uploaded ${event.loaded} bytes of ${event.total}`
        const percentage = (event.loaded / event.total) * 100;
        progressReference.current.value = Math.round(percentage);
        statusReference.current.innerHTML = `${Math.round(percentage)}% uploaded`;
    }


    function handleSuccess(event){
        statusReference.current.innerHTML=event.target.responseText;
        progressReference.current.value=0;
    }

    function handleError(){
        statusReference.current.innerHTML='upolad failed please try agin later';

    }

    function handleAbort(){
        statusReference.current.innerHTML='upload aborted please try again later'
    }

    console.log(file);
    console.log(uploadReference);
    console.log(progressReference);
    console.log(statusReference);
    console.log(loadRefernce);

/*
    function uploadUsingFetch(event){

    const file = event.target.files[0];
    if (!file) return;

    const previewImage = document.getElementById('previewImage');
    previewImage.src = URL.createObjectURL(file);
    previewImage.style.display = 'block';

    let formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://your-server-endpoint.com/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const result = await response.json();
        document.getElementById('statusMessage').textContent = 'Upload successful!';
    } catch (error) {
        document.getElementById('statusMessage').textContent = 'Upload failed, please try again later';
    } finally {
        document.getElementById('progressBar').value = 0;
    }
}

    }
    */

  return (
    <div className="file-upload-container">
      <h1>File Upload</h1>
      <input onChange={handleUploadFile} type="file" ref={uploadReference} />
      <label>
        File Progress:
       <progress ref={progressReference} value={"0"} max={"100"}/>
      </label>
      <p className="status" ref={statusReference}></p>
      <p className="load" ref={loadRefernce}></p>
      <img src={file} alt="File-upload" style={{width:'100px',height:"100px"}}/>
    </div>
  );
}

export default FileUpload;



/*
  steps to upload file
    1.storing reference of file
     const file=uploadReference.current.files[0];

    2.object creation link creation of file
       setFile(URL.createObjectURL(file));

    3.preapare file
     let formData=new FormData();

     4.Append
     formData.append('image',file)

     5.make request

     */