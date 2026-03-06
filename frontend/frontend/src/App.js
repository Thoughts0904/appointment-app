import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Update this line to point to Port 4000
    axios.get('http://localhost:4000/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Appointments</h1>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>{a.date} — {a.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;