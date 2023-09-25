import React, { useState, useRef, useEffect } from "react";

function App() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;
  //address
  const [adressejobben, setAdresseJobben] = useState("adresse jobben");
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState(adressejobben);

  const handleAdressClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setAdresseJobben(newAddress);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewAddress(adressejobben);
  };

  // worktitle
  const [soknad, setSoknad] = useState("Soknad som");
  const [isEditingSokand, setIsEditingSoknad] = useState(false);
  const [newSoknad, setNewSokand] = useState(soknad);

  const handleSoknadClick = () => {
    setIsEditingSoknad(true);
  };

  const handleSaveClickSoknad = () => {
    setSoknad(newSoknad);
    setIsEditingSoknad(false);
  };

  const handleCancelClickSoknad = () => {
    setIsEditingSoknad(false);
    setNewAddress(soknad);
  };

  // body
  const a = `Jeg søker med stor interesse på pleieassistentstillingen ved [navn på sykehjem], som jeg nylig oppdaget gjennom [hvor du hørte om stillingen].  Jeg er overbevist om at min dedikasjon til omsorg, min erfaring og mine ferdigheter gjør meg til en passende kandidat for denne stillingen.`;
  const [Body, setBody] = useState(a);
  const [isEditingBody, setIsEditingBody] = useState(false);
  const [newBody, setNewBody] = useState(Body);

  const handleBodyClick = () => {
    setIsEditingBody(true);
  };

  const handleSaveClickBody = () => {
    setBody(newBody);
    setIsEditingBody(false);
  };

  const handleCancelClickBody = () => {
    setIsEditingBody(false);
    setNewAddress(Body);
  };

  // body1
  const a1 = `Min interesse for å hjelpe og ta vare på eldre mennesker har alltid vært en drivkraft i mitt yrkesvalg. Jeg jobber for tiden som yrkesfaglig rådgiver på sykehjem for psykisk syke, jeg har fått mye erfaring med å gi omsorg og støtte til eldre beboere. Denne erfaringen styrket min evne til å håndtere ulike omsorgsoppgaver, utvikle sterke kommunikasjonsevner og vise empati i å svare på pasientenes behov.`;
  const [Body1, setBody1] = useState(a1);
  const [isEditingBody1, setIsEditingBody1] = useState(false);
  const [newBody1, setNewBody1] = useState(Body1);

  const handleBody1Click = () => {
    setIsEditingBody1(true);
  };

  const handleSaveClickBody1 = () => {
    setBody1(newBody1);
    setIsEditingBody1(false);
  };

  const handleCancelClickBody1 = () => {
    setIsEditingBody1(false);
    setNewAddress(Body1);
  };

  // Body2
  const a2 = `Som pleieassistent er jeg opptatt av å skape et trygt, støttende og respektfullt miljø for pasientene. Jeg vil også meddele at jeg er norsk statsborger og har tenkt å reise tilbake til Norge i januar. Jeg hadde allerede planer om å bosette meg på Skarnes, og motivasjonen min for denne flyttingen er å fortsette min karriere i omsorgssektoren i Norge og bidra til fellesskapet der.`;
  const [Body2, setBody2] = useState(a2);
  const [isEditingBody2, setIsEditingBody2] = useState(false);
  const [newBody2, setNewBody2] = useState(Body2);

  const handleBody2Click = () => {
    setIsEditingBody2(true);
  };

  const handleSaveClickBody2 = () => {
    setBody2(newBody2);
    setIsEditingBody2(false);
  };

  const handleCancelClickBody2 = () => {
    setIsEditingBody2(false);
    setNewAddress(Body2);
  };

  // Body3
  const a3 = `Selv om norskkunnskapene mine for øyeblikket ikke er flytende, er jeg fast bestemt på å forbedre dem raskt mens jeg bor i Norge. Jeg tror at daglig samhandling med både kolleger og beboere vil hjelpe meg å akselerere denne prosessen. Dessuten er jeg komfortabel med å kommunisere på engelsk når det er nødvendig.`;
  const [Body3, setBody3] = useState(a3);
  const [isEditingBody3, setIsEditingBody3] = useState(false);
  const [newBody3, setNewBody3] = useState(Body3);

  const handleBody3Click = () => {
    setIsEditingBody3(true);
  };

  const handleSaveClickBody3 = () => {
    setBody3(newBody3);
    setIsEditingBody3(false);
  };

  const handleCancelClickBody3 = () => {
    setIsEditingBody3(false);
    setNewAddress(Body3);
  };

  // Body4
  const a4 = `Jeg deler målet med [navn på sykehjem] å gi den høyeste kvaliteten på omsorg til våre eldre beboere og forbedre deres livskvalitet.  Jeg ser frem til muligheten til å bidra til det dedikerte omsorgsteamet til [sykehusets navn] og jobbe sammen for å nå dette målet.`;
  const [Body4, setBody4] = useState(a4);
  const [isEditingBody4, setIsEditingBody4] = useState(false);
  const [newBody4, setNewBody4] = useState(Body4);

  const handleBody4Click = () => {
    setIsEditingBody4(true);
  };

  const handleSaveClickBody4 = () => {
    setBody4(newBody4);
    setIsEditingBody4(false);
  };

  const handleCancelClickBody4 = () => {
    setIsEditingBody4(false);
    setNewAddress(Body4);
  };

  // Body5
  const a5 = `Jeg ser virkelig frem til å diskutere hvordan mine erfaringer og ferdigheter kan være en fordel for [Navn på sykehjemmet].  Takk for at du vurderer forespørselen min.`;
  const [Body5, setBody5] = useState(a5);
  const [isEditingBody5, setIsEditingBody5] = useState(false);
  const [newBody5, setNewBody5] = useState(Body5);

  const handleBody5Click = () => {
    setIsEditingBody5(true);
  };

  const handleSaveClickBody5 = () => {
    setBody5(newBody5);
    setIsEditingBody5(false);
  };

  const handleCancelClickBody5 = () => {
    setIsEditingBody5(false);
    setNewAddress(Body5);
  };

  return (
    <>
      <div className="p-4 w-75">
        <br />
        <h3>Lena Cohen</h3>
        <p>
          Spiksetsvingen 159 <br />
          2100 Skarnes <br />
          E-post: Lcohenabir82@gmail.com <br />
        </p>

        {isEditing ? (
          <>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <button className="btn btn-primary mx-1" onClick={handleSaveClick}>
              Save
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </>
        ) : (
          <p onClick={handleAdressClick}>{adressejobben}</p>
        )}
      </div>

      <p dir="rtl" className="mx-5">
        {formattedDate}
      </p>
      <div className="col-lg-10 col-md-12">
        <div className="w-100 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-0"></div>
              <div className="col-lg-10 col-md-12">
                <div className="p-4 w-75">
                  {isEditingSokand ? (
                    <>
                      <input
                        type="text"
                        value={newSoknad}
                        onChange={(e) => setNewSokand(e.target.value)}
                      />
                      <button
                        className="btn btn-primary mx-1"
                        onClick={handleSaveClickSoknad}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={handleCancelClickSoknad}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <p
                      style={{ fontWeight: "600", fontSize: "22px" }}
                      onClick={() => handleSoknadClick()}
                    >
                      {soknad}
                    </p>
                  )}
                </div>
                {isEditingBody ? (
                  <>
                    <textarea
                      type="text"
                      value={newBody}
                      onChange={(e) => setNewBody(e.target.value)}
                      cols={70}
                      rows={5}
                    />
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleSaveClickBody}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleCancelClickBody}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <p className="mx-4" onClick={() => handleBodyClick()}>
                    {Body}
                  </p>
                )}
                {isEditingBody1 ? (
                  <>
                    <textarea
                      type="text"
                      value={newBody1}
                      onChange={(e) => setNewBody1(e.target.value)}
                      cols={70}
                      rows={5}
                    />
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleSaveClickBody1}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleCancelClickBody1}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <p className="mx-4" onClick={() => handleBody1Click()}>
                    {Body1}
                  </p>
                )}
                {isEditingBody2 ? (
                  <>
                    <textarea
                      type="text"
                      value={newBody2}
                      onChange={(e) => setNewBody2(e.target.value)}
                      cols={70}
                      rows={5}
                    />
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleSaveClickBody2}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleCancelClickBody2}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <p className="mx-4" onClick={() => handleBody2Click()}>
                    {Body2}
                  </p>
                )}
                {isEditingBody3 ? (
                  <>
                    <textarea
                      type="text"
                      value={newBody3}
                      onChange={(e) => setNewBody3(e.target.value)}
                      cols={70}
                      rows={5}
                    />
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleSaveClickBody3}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleCancelClickBody3}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <p className="mx-4" onClick={() => handleBody3Click()}>
                    {Body3}
                  </p>
                )}
                {isEditingBody4 ? (
                  <>
                    <textarea
                      type="text"
                      value={newBody4}
                      onChange={(e) => setNewBody4(e.target.value)}
                      cols={70}
                      rows={5}
                    />
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleSaveClickBody4}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleCancelClickBody4}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <p className="mx-4" onClick={() => handleBody4Click()}>
                    {Body4}
                  </p>
                )}
                {isEditingBody5 ? (
                  <>
                    <textarea
                      type="text"
                      value={newBody5}
                      onChange={(e) => setNewBody5(e.target.value)}
                      cols={70}
                      rows={5}
                    />
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleSaveClickBody5}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={handleCancelClickBody5}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <p className="mx-4" onClick={() => handleBody5Click()}>
                    {Body5}
                  </p>
                )}
                <h4 className="mx-4"> Vennlig hilsen.</h4>
                <br />
                <img src="../public/sign.png" width="30%" alt="" />
                <br /> <br />
                <h4 className="mx-4">Lena Cohen</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SignaturePad() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const canvasWidth = 300;
  const canvasHeight = 150;
  const canvasBackgroundColor = "#fff";
  const lineWidth = 2;
  const lineColor = "lightblue";

  const startDrawing = (e) => {
    e.preventDefault(); // Prevent default touch behavior
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.beginPath();
    disableScroll();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    enableScroll();
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = canvasBackgroundColor;
    context.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "signature.png";
    downloadLink.click();
  };

  const disableScroll = () => {
    // Disable scrolling for touch devices
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    // Enable scrolling for touch devices
    document.body.style.overflow = "auto";
  };

  // Cleanup event listeners on component unmount
  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "1px solid #000" }}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        onMouseLeave={endDrawing}
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
      ></canvas>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={downloadCanvas}>Download as PNG</button>
    </div>
  );
}

export default App;
