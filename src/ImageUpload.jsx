import { Button } from '@mui/material';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { db, storage } from './firebase';
import './ImageUpload.css'

function ImageUpload({username}) {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }


    const handleUpload=()=>{
    const storageRef = ref(storage,`image/${image.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image)
    .then(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress)
      }
      
     
    );

    



    
    const starsRef = ref(getStorage(), `image/${image.name}`);

// Get the download URL
getDownloadURL(starsRef)
  .then((url) => {
    addDoc(collection(db, "posts"), {
      timestamp:serverTimestamp(),
      caption:caption,
      imageUrl:url,
      username:username
    });
    setCaption('');
    setImage(null);
    setProgress(0)
  })
    
   
        }
  return (
    <div className='imageupload'>
        <progress className='imageupload_progress' value={progress} max='100'/>
        <input type="text" placeholder='Enter a caption...' value={caption} onChange={(e)=>{setCaption(e.target.value)}} />
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>
            Upload
        </Button>

    </div>
  )
}

export default ImageUpload