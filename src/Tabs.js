import { useState } from "react";
import AllContacts from "./AllContacts";
import "./App.css";
import { TabContent } from "./TabContent";
import { LETTERS } from "./utils";

const Tabs = ({ Users }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // upper tabs
  let upperTabs = LETTERS.slice(0, 8).map((letter, i) => {
    return (
      <button
        key={i + 1}
        value={letter}
        className={toggleState === i + 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(i + 1)}
      >
        {letter}
      </button>
    );
  });

  // middle tabs
  let middleTabs = LETTERS.slice(8, 17).map((letter, i) => {
    return (
      <button
        key={i + 9}
        value={letter}
        className={toggleState === i + 9 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(i + 9)}
      >
        {letter}
      </button>
    );
  });

  // under tabs
  let underTabs = LETTERS.slice(17, 26).map((letter, i) => {
    return (
      <button
        key={i + 18}
        value={letter}
        className={toggleState === i + 18 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(i + 18)}
      >
        {letter}
      </button>
    );
  });

  return (
    <div data-testid="tabs-1" className="container">
      {/* BUTTONS - TABS */}

      <div className="block-tabs-all">
        <div className="block-tabs">
          {" "}
          <button
            className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(0)}
          >
            all contacts
          </button>
          {upperTabs}
        </div>
        <div className="block-tabs">{middleTabs}</div>
        <div className="block-tabs">{underTabs}</div>
      </div>
      {/* CONTENT OF EVERY TAB */}
      <div className="content-tabs">
        <AllContacts Users={Users} toggleState={toggleState} />
        <TabContent Users={Users} toggleState={toggleState} />
      </div>
    </div>
  );
};

export default Tabs;
