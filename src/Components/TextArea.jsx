import React, { useState, useContext } from "react";
import { TextContext } from "./TextContext";

function EditableTextList({ initialArray }) {
  const { setBodies } = useContext(TextContext);

  const initialData = [
    initialArray[0],
    initialArray[1],
    initialArray[2],
    initialArray[3],
    initialArray[4],
    initialArray[5],
  ];
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditValue(data[index]);
  };

  const handleSaveClick = () => {
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = editValue;
      setData(updatedData);
      setEditIndex(null);
      setBodies(updatedData);
    }
  };

  const handleCancelClick = () => {
    setEditIndex(null);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {editIndex === index ? (
            <div className="row ">
              <textarea
                className=" border-1 "
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                cols={30}
                rows={5}
              ></textarea>

              <button
                className="btn btn-outline-success m-2"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="btn btn-outline-success m-2 "
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          ) : (
            <p onClick={() => handleEditClick(index)}>{item}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default EditableTextList;
