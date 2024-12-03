import { useCallback, useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [specialchar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) string += "0123456789";
    if (specialchar) string += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * string.length); // Fixed random index calculation
      pass += string.charAt(index);
    }
    setPassword(pass);
  }, [numbersAllowed, specialchar, length]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, specialchar, passwordGenerator]);

  const handleCopy = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      toast.success("Password copied to clipboard!");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
        <div className="flex flex-col items-center gap-4 w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-white text-4xl font-extrabold">Password Generator</h1>
          <div className="flex w-full gap-2">
            <input
              ref={passwordRef} // Attach ref to the input
              className="flex-grow text-orange-700 font-bold shadow-inner px-4 py-2 rounded-md bg-gray-700"
              type="text"
              placeholder="Password"
              value={password}
              readOnly
            />
            <button
              className="bg-blue-800 text-white text-lg px-4 py-2 rounded-md"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex items-center justify-between">
              <label className="text-orange-500">Length: {length}</label>
              <input
                type="range"
                value={length}
                min={8}
                max={20}
                className="cursor-pointer w-2/3"
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-orange-500">Numbers</label>
              <input
                type="checkbox"
                checked={numbersAllowed}
                onChange={() => setNumbersAllowed((prev) => !prev)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-orange-500">Special Characters</label>
              <input
                type="checkbox"
                checked={specialchar}
                onChange={() => setSpecialChar((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Add the ToastContainer to render toasts */}
      <ToastContainer />
    </>
  );
}

export default App;
