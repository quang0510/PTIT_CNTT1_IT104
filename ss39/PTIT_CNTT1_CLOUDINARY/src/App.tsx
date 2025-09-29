import "./App.css";
import DeleteFileUploaded from "./components/DeleteFileUploaded";
import UploadMultiFile from "./components/UploadMultiFile";
import UploadSingleFile from "./components/UploadSingleFile";

function App() {
  return (
    <>
      <UploadSingleFile />
      <DeleteFileUploaded />
      <UploadMultiFile />
    </>
  );
}

export default App;