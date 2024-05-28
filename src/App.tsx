import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

import './App.css';

const license = 'YzY0OWU3MDIyODIzYTFlZWNiNjcyMDk3YWI1NjlkNWVjNzcxMjBhMDZiNjlkZjNiMzcxZDVkZjEwYWFlM2U1MzBiNTQwNWQ0NmZhMTAzZjNkYTcyNzgxODVlYmU3ZDAyOTY4ZTI0YjlkM2QyOTE1YWU3NDQ5MDk1NWEyMTNkOWMsZXlKamJHbGxiblJKWkNJNkltRTFNRFZsTlRFNU9UTTVaV0UxWVRsa01USmpNalUyTURsaE4yVXdOR1pqTnpWak5UWXhaRE1pTENKdVlXMWxJam9pVTNSbGRtVnVJRmxoYmlJc0ltUmhkR1VpT2pFM01UazFNamt5TURBc0ltUnZiV0ZwYmlJNld5SjNaV0lpTENKc2IyTmhiR2h2YzNRaVhTd2ljR3hoYmlJNk16RXNJbk5qYjNCbElqcGJJblkzSWl3aWRqZ2lMQ0oyT1NJc0luWXhNQ0lzSW5ZeE1TSXNJbVp2Y20xMWJHRWlMQ0ptYjNKdGN5SXNJbkpsYm1SbGNpSXNJbkJoY25ObGNpSXNJbWx0Y0c5eWRHVnlJaXdpYzJWaGNtTm9JaXdpWTI5dGJXVnVkSE1pTENKMllXeHBaR0YwYVc5dWN5SXNJbU5vWVhKMGN5SXNJbkJ5YVc1MElpd2lZbUZ5SWl3aWMyaGxaWFJ6SWl3aWMyaGhjR1Z6SWl3aWMyVnlkbVZ5SWwxOQ==';

function App() {
  const spreadsheet = useRef();

  return (
    <div className="App">
      <Spreadsheet license={license} ref={spreadsheet}>
        <Worksheet />
      </Spreadsheet>
    </div>
  );
}

export default App;
