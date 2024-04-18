import React from "react";
import TagManager from "react-gtm-module";

const useEventsTracker = (category = "Event Category") => {
  const trackEvent = (action = "action", label = "label") => {
    TagManager.dataLayer({
      dataLayer: {
        event: "interaction",
        category,
        action,
        label,
      },
    });
  };

  return trackEvent;
};

export default useEventsTracker;
