import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReservationDetail = () => {
  const { id } = useParams();
  const reservations = useSelector((state) => state.table.table);

  return (
    <div>
      <ul>
        {reservations.map((reservation) => (
          <div key={reservation.id}>
            <li>
              <p>Guest Name: {reservation.name}</p>
              <p>Table number: {reservation.tableNumber}</p>
              <p>Reservation Time: {reservation.time}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ReservationDetail;
