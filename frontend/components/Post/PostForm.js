import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {  useMutation } from '@apollo/client';
import {QUERY_ME} from '../../utils/queries'
import { CREATE_POST} from '../../utils/mutations';

const PostForm = () => {
    const [titleCharacterCount, setTitleCharacterCount] = useState(40)
    const [descriptionCharacterCount, setDescriptionCharacterCount] = useState(160)

    const [postInfo, setPostInfo] = useState({
        title: '',
        description: '',
        location: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setPostInfo({
            ...postInfo,
            [name]: value
        })

        if(e.target.name === 'title') {
            setTitleCharacterCount(40-  e.target.value.length)
        }
        else if(e.target.name === 'description') {
            setDescriptionCharacterCount(160-  e.target.value.length)
        }
    }

    const [addPost, {error}] = useMutation(CREATE_POST)
        

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try{
            await addPost({
                variables: {
                    userId: '63e4e7503d479ced5b892e13',
                    title: postInfo.title, 
                    description: postInfo.description, 
                    location: postInfo.location, 
                    image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                },

                
            })
        } catch (e){
            console.error(e)
        }

        await window.location.replace('/')
    }
    // const uploadFile = useMutation(UPLOAD_FILE, {
    //     refetchQueries: [{query: filesQuery}]
    // })

    const onDrop = useCallback(
        ([file]) => {
            // uploadFile({variables: {file}})
        }, [])

      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    

    return (
        <form  onSubmit={handleFormSubmit} id='postForm' className='w-full px-6 flex flex-col items-center justify-center md:w-3/5 pb-8'>
            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <div className='flex justify-between items-center w-full mb-1'>
                    <label className='font-semibold text-0.875 '>Title</label>
                    <p className='text-0.875 text-medium italic'>{titleCharacterCount}/40 remaining</p>
                </div>
                <input 
                    className={`rounded-lg h-12 p-4 font-semibold text-0.875 border-solid border-light border-2 focus:outline-primary `} 
                    maxLength='40'
                    name='title' 
                    required
                    type='text' 
                    placeholder='ex: Celebrating with 4 tall Hamms...'
                    onChange={handleChange}></input>
            </div>

            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <div className='flex justify-between items-center w-full mb-1'>
                    <label className='font-semibold text-0.875 '>Description</label>
                    <p className='text-0.875 text-medium italic'>{descriptionCharacterCount}/160 remaining</p>
                </div>
                <textarea 
                    className='rounded-lg h-24 p-4 font-semibold text-0.875 border-solid border-light border-2 focus:outline-primary '  
                    name='description' 
                    maxLength='160'
                    required
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <label className='font-semibold text-0.875  mb-1 '>Location</label>
                 <input 
                    onChange={handleChange} 
                    className='rounded-lg h-12 p-4 font-semibold text-0.875 border-solid border-light border-2 focus:outline-primary ' 
                    name='location' 
                    type='text' 
                    required
                    placeholder="City, State">
                </input>
            </div>

            <div className='flex items-left flex-col mb-4 w-full lg:w-80'>
    
            </div>
        

          

            {/* SUBMIT BTN */}
            <button type='submit' className='bg-dark rounded w-44 h-12 text-white mb-12 lg:w-80'>Submit</button>
        </form>)
}


export default PostForm