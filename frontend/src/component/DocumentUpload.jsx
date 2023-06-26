import React ,{useState} from 'react'
import axios from 'axios'

export default function DocumentUpload() {
  
  const [, setfileURL] = useState("");
  const [selectedFile, setselectedFile] = useState(null);
  const [uploadedFile, setuploadedFile] = useState({});
  const [isUploading, setisUploading] = useState(false);
  const [isFileUploaded, setisFileUploaded] = useState(false);
  const [uploadProgress, setuploadProgress] = useState(0);

  let uploadInput = React.createRef();

  const handleSelectFile = (e) => {
    const selectedFileList = [];
    for (let i = 0; i < e.target.files.length; i++) {
      selectedFileList.push(e.target.files.item(i));
    }
    setselectedFile(selectedFileList);
  };

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
      setfileURL(`http://127.0.0.1:5000/${body.filename}`);
      if (response.status === 200) {
        setisFileUploaded(true); // flag to show the uploaded file
        setisUploading(false);
        setuploadedFile(selectedFile); // set the uploaded file to show the name
      }
    } catch (error) {
      console.error(error);
      setisUploading(false);
    }
  };



  return (
    <>
    <form onSubmit={handleUploadFile} >
      <label for="formFileLg" className="mb-2 inline-block text-3xl text-neutral-900 dark:text-neutral-500 font-thin">Drop Your File Here 🚀 </label>
          <input ref={(ref) => { uploadInput = ref; }} onChange={handleSelectFile} className="bg-slate-100 mt-2 font-thin relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-1.5 text-xl text-slate-800 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-500 dark:focus:bg-transparent" id="file" type="file"  name="file" multiple required/>
          <button type='submit' className="mt-2 bg-slate-100 px-4 py-3 rounded-md font-thin text-2xl text-">Submit</button>
    </form>
    </>
    )
}

