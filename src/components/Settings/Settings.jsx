import React, { useState } from 'react';
import TicketScreen from '../TicketScreen';
import './style.scss'

function Settings() {
    const [vehicle, setVehicle] = useState("");
    const [ticket, setTicket] = useState(1);
    const [vagon, setVagon] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
    
    const handleRadio = (e) => {
        setVehicle(e.target.value);
    }

    const handleTicket = (e) => {
        setTicket(e.target.value);
    }

    const handleVagon = (e) => {
      setVagon(e.target.value);
    };

    return (
      <>
        {submitted ? (
          <TicketScreen vehicle={vehicle} ticket={ticket} vagon={vagon} />
        ) : (
          <div className="settings">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  id="tram"
                  type="radio"
                  name="transport"
                  value={"Трамвай"}
                  onChange={handleRadio}
                />
                <label htmlFor="tram">Трамвай</label>
              </div>

              <div>
                <input
                  id="troll"
                  type="radio"
                  name="transport"
                  value={"Тролейбус"}
                  onChange={handleRadio}
                />
                <label htmlFor="troll">Тролейбус</label>
              </div>

              <input
                type="number"
                min={1}
                max={2}
                value={ticket}
                onChange={handleTicket}
              />

              <input type="text" onChange={handleVagon} />
              <button type="submit">submit</button>
            </form>
          </div>
        )}
      </>
    );
}
export default Settings;