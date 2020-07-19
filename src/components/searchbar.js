import React, { useState } from "react";

export default function NameForm() {
  const [rsn, setRsn] = useState("");
  
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(rsn)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        RSN:
        <input
          type="text"
          value={rsn}
          onChange={e => setRsn(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}