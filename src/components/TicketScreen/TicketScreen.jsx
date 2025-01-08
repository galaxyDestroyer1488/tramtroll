import React, { useRef, useEffect } from "react";
import './style.scss'
import dniproImage from "../../images/dnipro.PNG";
import grn from "../../images/10grn.png";
import arrow from "../../images/arrow-button (2).png"
import { serialNumber } from '../../utils/serialNumber';
import { day, time, timer } from '../../utils/date';

function TicketScreen({vehicle, ticket, vagon}) {
 const timerRef = useRef();

 useEffect(() => {
   timer((time) => {
     if (timerRef.current) {
       timerRef.current.textContent = time;
     }
   });
 }, []);
  

  return (
    <div className="main_wrapper">
      <img className="arrow" src={arrow} alt="arrow"></img>
      <div className="arhiv">
        <p>Архів</p>
      </div>
      <div className="toggle">
        <div className="kvitok">
          <p>Квиток</p>
        </div>
        <div className="proizd">
          <p>Проїзний</p>
        </div>
      </div>

      <div className="wrapper">
        <div className="top_info">
          <div className="dniproImg">
            <img src={dniproImage} alt="dnipro"></img>
          </div>

          <div className="serial">
            <p>Дніпро</p>
            <p>КП Дніпровський</p>
            <p>електротранспорт ДМР</p>
            {ticket > 1 ? (
              <p>
                Серія{" "}
                <b>
                  {serialNumber()}, {serialNumber()}
                </b>
              </p>
            ) : (
              <p>
                Серія <b>{serialNumber()}</b>
              </p>
            )}
          </div>
        </div>
        <div className="grnImg">
          <img src={grn} alt="grn"></img>
        </div>

        <div className="vagon">
          <p>№{vagon}</p>
          <p className="transparent">{vehicle}</p>
        </div>

        <div className="date_time_ticket">
          <div>
            <p className="transparent">Дата</p>
            <p>{day()}</p>
          </div>

          <div>
            <p className="transparent">Час</p>
            <p>{time()}</p>
          </div>

          <div>
            <p className="transparent">Пасажири</p>
            <p>{ticket}</p>
          </div>
        </div>

        <div className="bottom_text">
          <p>Квиток разового використання</p>
          <b ref={timerRef}>59:57</b>
        </div>
      </div>

      <div className="button">
        <p>Відсканувати QR-код</p>
      </div>
    </div>
  );
}
export default TicketScreen;