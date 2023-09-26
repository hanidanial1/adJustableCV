import { createContext, useState } from "react";

const TextContext = createContext();

function TextContextProvider({ children }) {
  //getting date by dd/mm/yyyy
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;

  //here to get the text for pdf
  const initialArray = [
    `Jeg vil gjerne uttrykke min sterke interesse for muligheten til a jobbe innen omsorgsfeltet ved [navn på omsorgssted]. Jeg har alltid hatt dyp respekt for eldre og mennesker med spesielle behov, og onsker å bidra til å forbedre deres hverdag.

    Min erfaring som Aktivitør på en avdeling for Alzheimerpasienter har laert meg verdien av omsorg og oppmerksomhet når jeg jobber med eldre.

    Jeg er fast bestemt på å bringe glede til beboernes hverdag ved å skape et varmt og inkluderende miljø, hvor deres interesser og behov blir hørt og ivaretatt med omsorg og oppmerksomhet. Å se smilene deres lyse opp dagen min gir meg stor tilfredsstillelse.

    Jeg har even til å håndtere ulike oppgaver effektivt og er alltid klar til å stille spørsmål og lære når det trengs. Jeg er fast bestemt på å utvide min kunnskap og erfaring for å gi best mulig omsorg og støtte til de som trenger det.

    Jeg flytter til Skarnes i januar. Jeg er halvt norsk med norsk statsborgerskap. Jeg gleder meg veldig til å møte deg og diskutere hvordan jeg kan bidra til ditt sykehjem. Selv om norskkunnskapene mine for øyeblikket ikke er flytende, er jeg fast bestemt på å forbedre dem raskt mens jeg bor i Norge. Jeg tror at daglig samhandling med bade kolleger og beboere vil hjelpe meg å akselerere denne prosessen. Dessuten er jeg komfortabel med å kommunisere på engelsk når det er nødvendig. I dag bor jeg i Israel.

    Jeg ser virkelig frem til å diskutere hvordan mine erfaringer og ferdigheter kan være en fordel for [Navn på sykehjemmet]. Takk for at du vurderer forespørselen min.`
    
    ,
    //add text if wanted to other paragraph 
    //
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
