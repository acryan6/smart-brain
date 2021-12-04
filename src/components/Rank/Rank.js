import React, { useState, useEffect } from "react";

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState("");

  const generateEmoji = (entries) => {
    fetch(
      `https://24yxw859ne.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`
    )
      .then((res) => res.json())
      .then((data) => setEmoji(data.input))
      .catch(console.log);
  };

  useEffect(() => {
    generateEmoji(entries);
  }, [entries]);

  return (
    <div>
      <div className="white f3">
        {`${name}, your current entry count is...`}
      </div>
      <div className="white f3">{entries}</div>
      <div className="white f3">{`Rank Badge: ${emoji}`}</div>
    </div>
  );
};

export default Rank;
