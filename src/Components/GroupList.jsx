import React, { useState } from "react";
import "./css/GroupList.scss";
import Groups from "./Groups";
import { getInitials } from "./utils";

function GroupList({ headings, onSelectHeading }) {

  return (
    <div className="Hlist">
      <ul className="Headings-List">
        {headings.map((heading) => {
          const initials = getInitials(heading.name);
          return (
            <Groups
              {...heading}
              initials={initials.toUpperCase()}
              key={heading.name}
              onSelect={() => onSelectHeading(heading)}
            />
          );
        })}
        
      </ul>
    </div>
  );
}

export default GroupList;
