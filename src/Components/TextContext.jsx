import{ createContext, useState } from "react";

const TextContext = createContext();

function TextContextProvider({ children }) {

    //getting date by dd/mm/yyyy
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;


  //here to get the text for pdf 
  const initialArray = [
    `Jeg søker med stor interesse på pleieassistentstillingen ved 
    [navn på sykehjem], som jeg nylig oppdaget gjennom [hvor du hørte om stillingen].  Jeg er overbevist om at min dedikasjon til omsorg, min erfaring og mine ferdigheter
     gjør meg til en passende kandidat for denne stillingen.`,

    `Min interesse for å hjelpe og ta vare på eldre mennesker har alltid vært en drivkraft i mitt yrkesvalg. Jeg jobber for tiden som yrkesfaglig rådgiver på sykehjem for psykisk syke, jeg har fått mye erfaring med å gi omsorg og støtte til eldre beboere. Denne erfaringen styrket min evne til å håndtere ulike omsorgsoppgaver, utvikle sterke kommunikasjonsevner og vise empati i å svare på pasientenes behov.`,

    `Min interesse for å hjelpe og ta vare på eldre mennesker har alltid vært en drivkraft i mitt yrkesvalg. Jeg jobber for tiden som yrkesfaglig rådgiver på sykehjem for psykisk syke, jeg har fått mye erfaring med å gi omsorg og støtte til eldre beboere. Denne erfaringen styrket min evne til å håndtere ulike omsorgsoppgaver, utvikle sterke kommunikasjonsevner og vise empati i å svare på pasientenes behov.`,

    `Som pleieassistent er jeg opptatt av å skape et trygt, støttende og respektfullt miljø for pasientene. Jeg vil også meddele at jeg er norsk statsborger og har tenkt å reise tilbake til Norge i januar. Jeg hadde allerede planer om å bosette meg på Skarnes, og motivasjonen min for denne flyttingen er å fortsette min karriere i omsorgssektoren i Norge og bidra til fellesskapet der.`,

    `Selv om norskkunnskapene mine for øyeblikket ikke er flytende, er jeg fast bestemt på å forbedre dem raskt mens jeg bor i Norge. Jeg tror at daglig samhandling med både kolleger og beboere vil hjelpe meg å akselerere denne prosessen. Dessuten er jeg komfortabel med å kommunisere på engelsk når det er nødvendig.`,

    `Jeg deler målet med [navn på sykehjem] å gi den høyeste kvaliteten på omsorg til våre eldre beboere og forbedre deres livskvalitet.  Jeg ser frem til muligheten til å bidra til det dedikerte omsorgsteamet til [sykehusets navn] og jobbe sammen for å nå dette målet.`,
  ];

  const [bodies, setBodies] = useState(initialArray);



  //add var or everthing you want to pass in this app 
  const contextValue = {
    initialArray,
    setBodies,
    bodies,
    formattedDate,
  };

  return (
    <TextContext.Provider value={contextValue}>{children}</TextContext.Provider>
  );
}

export { TextContextProvider, TextContext };
