import React from "react";
import ReactGA from "react-ga4";

const useEventsTracker = (category = "Event Category") => {
  const trackEvent = (action = "action", label = "label") => {
    ReactGA.event({ category, action, label });
  };

  return trackEvent;
};

export default useEventsTracker;
