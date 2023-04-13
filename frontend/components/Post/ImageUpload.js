import React, {useState} from 'react'
import ReactS3 from 'react-s3'
import S3FileUpload from 'react-s3';

import { uploadFile } from 'react-s3';

const ImageUpload = () => {
 

    const handleChange = e => {
        const file = e.target.files[0]
        S3FileUpload.uploadFile(file, config)
            .then(data => console.log(data))
            .catch(e => alert(e))
    }

    const config = {
        bucketName: 'brews-with-brule',
        region: 'eu-east-1',
        accessKeyId: 'AKIAXUOO2IIHELZMMGPI',
        secretAccessKey: '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',
    }


  return (


    <div className="w-full">
        <input type='file' onChange={handleChange} />
    </div>
  )
}

export default ImageUpload