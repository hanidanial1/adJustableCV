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
    `Jeg vil gjerne uttrykke min sterke interesse for muligheten til a jobbe innen omsorgsfeltet ved [navn pà omsorgssted]. Jeg har alltid hatt dyp respekt for eldre og mennesker med spesielle behov, og onsker à bidra til à forbedre deres hverdag.`,

    `Min erfaring som Aktiviter pa en avdeling for Alzheimerpasienter har laert meg verdien av omsorg og oppmerksomhet när jeg jobber med eldre.
    Jeg er fast bestemt pa & bringe glede til beboernes hverdag ved & skape et varmt og inkluderende milje, hvor deres interesser og behov blir hort og ivaretatt med omsorg og oppmerksomhet. À se smilene deres lyse opp dagen min gir meg stor tilfredsstillelse.`,

    `Jeg har even til & hândtere ulike oppgaver effektivt og er alltid klar til stille sparsmal og lare nar det trengs. Jeg er fast bestemt pa à utvide min kunnskap og erfaring for & gi best mulig omsorg og stette til de som trenger det.`,

    `Jeg flytter til Skarnes i januar. Jeg er halvt norsk med norsk statsborgerskap. Jeg gleder meg veldig til à mote deg og diskutere hvordan jeg kan bidra til ditt sykehjem. Selv om norskkunnskapene mine for eyeblikket ikke er flytende, er jeg fast bestemt pa á forbedre dem raskt mens jeg bor i Norge. Jeg tror at daglig samhandling med bade kolleger og beboere vil hjelpe meg a akselerere denne prosessen. Dessuten er jeg komfortabel med à kommunisere pá engelsk nar deter nodvendig. I dag bor jeg i Israel.`,

    `Jeg ser virkelig frem til a diskutere hvordan mine erfaringer og ferdigheter kan veere en fordel for [Navn pá sykehjemmet]. Takk for at du vurderer foresperselen min.`,
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
