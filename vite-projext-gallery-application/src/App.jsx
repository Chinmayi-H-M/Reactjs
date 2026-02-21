import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-black text-white min-h-screen p-5">

      {/* Images Section */}
      {userData.length === 0 ? (
        <h1 className="text-gray-400 text-center mt-20">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {userData.map((item) => (
            <div key={item.id} className="text-center">
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="h-48 w-full bg-white overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full object-cover"
                    src={`https://picsum.photos/id/${item.id}/300/300`}
                    alt={item.author}
                  />
                </div>
                <h2 className="mt-2 font-semibold">
                  {item.author}
                </h2>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Section */}
      <div className="flex justify-center gap-10 mt-10 items-center">
        <button
          disabled={index === 1}
          onClick={() => setIndex((prev) => prev - 1)}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <h4 className="text-lg font-bold">Page {index}</h4>

        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;