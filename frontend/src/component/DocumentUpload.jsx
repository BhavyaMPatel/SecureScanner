import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [, setfileURL] = useState("");
  const [selectedFile, setselectedFile] = useState(null);
  const [uploadedFile, setuploadedFile] = useState({});
  const [isUploading, setisUploading] = useState(false);
  const [isFileUploaded, setisFileUploaded] = useState(false);
  const [uploadProgress, setuploadProgress] = useState(0);
  const [DownLoad, setdownLoad] = useState(false);
  let uploadInput = React.createRef();

  // Track selected file before the upload
  const handleSelectFile = (e) => {
    const selectedFileList = [];
    for (let i = 0; i < e.target.files.length; i++) {
      selectedFileList.push(e.target.files.item(i));
    }
    setselectedFile(selectedFileList);
  };

  // Upload file to server
  const handleUploadFile = async (ev) => {
    ev.preventDefault();
    setisUploading(true);
    const data = new FormData();
    // Append the file to the request body
    for (let i = 0; i < uploadInput.files.length; i++) {
      data.append("file", uploadInput.files[i], uploadInput.files[i].name);
    }

    try {
      const config = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          setuploadProgress(Math.round((loaded / total) * 100));
        },
      };
      const response = await axios.post(
        "http://localhost:5000/upload",
        data,
        config
      );
      const body = response.data;
      console.log(body);
      if (response.status === 200) {
        setisFileUploaded(true); // flag to show the uploaded file
        setisUploading(false);
        setuploadedFile(selectedFile); // set the uploaded file to show the name
        setdownLoad(true);
      }
    } catch (error) {
      console.error(error);
      
      setisUploading(false);
    }
  };
  
  async function Download(){
    let filename=document.getElementById("file").value
    filename=filename.replace(/^.*\\/, "");
    console.log(filename);
    const URL=`http://localhost:5000/downloads/${filename}`
    console.log(URL);
    let URL_Id=document.getElementById("URL_LINK");
    URL_Id.href=URL;
  }
 

  function AfterDownload(){
    const element=document.getElementById('room')

    console.log(element)
    setTimeout(function(){
    element.close();
    },2000);
  }

  return (

    <>
    <form onSubmit={handleUploadFile}>
    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-5">Upload multiple files</label>
    {DownLoad && <a id="URL_LINK" href="#" onClick={()=>{Download()}} className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800">DownLoad Your PDF Now</a>}
    <input className="p-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file" multiple type="file" ref={(ref) => {uploadInput = ref;}} onChange={handleSelectFile} />
    {!isFileUploaded && <button type="submit" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800">Submit</button>}
    {isUploading && <Loading/>}
    </form>

    </>
  );
}

export default App;

// How To Send To Another Page ? 
// 