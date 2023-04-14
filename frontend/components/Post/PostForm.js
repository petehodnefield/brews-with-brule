import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { CREATE_POST } from "../../utils/mutations";

const PostForm = () => {
  const [titleCharacterCount, setTitleCharacterCount] = useState(40);
  const [descriptionCharacterCount, setDescriptionCharacterCount] =
    useState(160);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const [addPost, { error }] = useMutation(CREATE_POST);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPost({
        variables: {
          userId: "63e4e7503d479ced5b892e13",
          title: title,
          description: description,
          location: location,
          image: image,
        },
      });
      console.log("success!");
    } catch (e) {
      console.error("error", e);
    }

    // await window.location.replace("/");
  };

  // Handle and convert to base 64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(reader.result);
    };
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      id="postForm"
      className="w-full px-6 flex flex-col items-center justify-center md:w-3/5 pb-8"
    >
      <div className="flex items-left flex-col mb-8 w-full lg:w-80">
        <div className="flex justify-between items-center w-full mb-1">
          <label className="font-semibold text-0.875 ">Title</label>
          <p className="text-0.875 text-medium italic">
            {titleCharacterCount}/40 remaining
          </p>
        </div>
        <input
          className={`rounded-lg h-12 p-4 font-semibold text-0.875 border-solid border-light border-2 focus:outline-primary `}
          maxLength="40"
          name="title"
          required
          type="text"
          placeholder="ex: Celebrating with 4 tall Hamms..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
      </div>

      <div className="flex items-left flex-col mb-8 w-full lg:w-80">
        <div className="flex justify-between items-center w-full mb-1">
          <label className="font-semibold text-0.875 ">Description</label>
          <p className="text-0.875 text-medium italic">
            {descriptionCharacterCount}/160 remaining
          </p>
        </div>
        <textarea
          className="rounded-lg h-24 p-4 font-semibold text-0.875 border-solid border-light border-2 focus:outline-primary "
          name="description"
          maxLength="160"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>

      <div className="flex items-left flex-col mb-8 w-full lg:w-80">
        <label className="font-semibold text-0.875  mb-1 ">Location</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          className="rounded-lg h-12 p-4 font-semibold text-0.875 border-solid border-light border-2 focus:outline-primary "
          name="location"
          type="text"
          required
          placeholder="City, State"
          value={location}
        ></input>
      </div>

      <input type="file" onChange={handleImage} />
      {/* SUBMIT BTN */}
      <button
        type="submit"
        className="bg-dark rounded w-44 h-12 text-white mb-12 lg:w-80"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
