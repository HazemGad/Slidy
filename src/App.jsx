
import './App.css'
import { Toaster } from "react-hot-toast";
function App() {


  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "red",
          },
        }}
      />
     
    </>
  );
}

export default App
