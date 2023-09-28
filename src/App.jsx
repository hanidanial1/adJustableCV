import React, { useContext, useState, useEffect } from "react";
import PDFComponent from "./Components/PDFCompoenet";
import { TextContext } from "./Components/TextContext";
import TextArea from "./Components/TextArea";

function App() {

  const { initialArray, bodies, setBodies, formattedDate } =
    useContext(TextContext);

  const [imgSrc, setImgSrc] = useState(
  "https://res.cloudinary.com/ddcbxytoh/image/upload/v1695736776/IMG_9582_odaiwq.jpg");
  const [inputSrc, setInputSrc] = useState(imgSrc);


 const [adressejobben, setAdresseJobben] = useState("adresse jobben");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState(adressejobben);

  const handleAddressClick = () => {
    setIsEditingAddress(true);
  };

  const handleApplyButtonClick = () => {

    setAdresseJobben(newAddress);
    setIsEditingAddress(false);
  };

  const handleSaveAddress = () => {
    setAdresseJobben(newAddress);
    setIsEditingAddress(false);
  };

  const handleCancelAddress = () => {
    setIsEditingAddress(false);
    setNewAddress(adressejobben);
  };

  const [soknad, setSoknad] = useState("Søknad som");
  const [isEditingSoknad, setIsEditingSoknad] = useState(false);
  const [newSoknad, setNewSoknad] = useState(soknad);
  const handleSoknadClick = () => {
    setIsEditingSoknad(true);
  };

  const handleSaveSoknad = () => {
    setSoknad(newSoknad);
    setIsEditingSoknad(false);
  };

  const handleCancelSoknad = () => {
    setIsEditingSoknad(false);
    setNewSoknad(soknad);
  };

  useEffect(() => {
    if (initialArray) {
      setBodies(initialArray);
    }
  }, []);

  return (
    <>
      <PDFComponent
        Date={formattedDate}
        adressJob={adressejobben}
        Soknad={soknad}
        p={bodies[0]}
        p1={bodies[1]}
        p2={bodies[2]}
        p3={bodies[3]}
        p4={bodies[4]}
        p5={bodies[5]}
      />
{/* here if you want to change the Name and details  */}
      <div className="p-4 w-75">
        <br />
        <h3>Lena Cohen</h3>
        <p>
          Spiksetsvingen 159 <br />
          2100 Skarnes <br />
          E-post: Lcohenabir82@gmail.com <br />
        </p>

{/* from this point dont touch anything everything adjustable in the html page 
 */}
        {isEditingAddress ? (
          <>
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
            <button
              className="btn btn-primary mx-1"
              onClick={handleSaveAddress}
            >
              Save
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={handleCancelAddress}
            >
              Cancel
            </button>
          </>
        ) : (
          <p onClick={handleAddressClick}>{adressejobben}</p>
        )}
      </div>

      <p dir="rtl" className="mx-5">
        {formattedDate}
      </p>
      <div className="col-lg-10 col-md-12">
        <div className="w-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-0"></div>
              <div className="col-lg-10 col-md-12">
                <div className="p-4 ">
                  {isEditingSoknad ? (
                    <>
                      <div className="container-fluid d-flex mb-4">
                        <input
                          type="text"
                          value={newSoknad}
                          onChange={(e) => setNewSoknad(e.target.value)}
                        />

                        <button
                          className="btn btn-success mx-2 "
                          onClick={handleSaveSoknad}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-success mx-2"
                          onClick={handleCancelSoknad}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <p
                      style={{ fontWeight: "600", fontSize: "22px" }}
                      onClick={() => handleSoknadClick()}
                    >
                      {soknad}
                    </p>
                  )}
                  <TextArea initialArray={bodies} />
                  <h4 className="mx-4"> Vennlig hilsen.</h4>
                  <br />
                  <img src={imgSrc} width="30%" alt="" />
                  <br />
                  <input
                    className="m-4"
                    type="text"
                    onChange={(e) => setInputSrc(e.target.value)}
                  />
                  <button onClick={handleApplyButtonClick}>Apply</button>
                  <br /> <br />
                  <h4 className="mx-4">Lena Cohen</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
