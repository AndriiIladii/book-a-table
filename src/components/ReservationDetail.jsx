import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReservationDetail = () => {
  const { id } = useParams();
  const reservations = useSelector((state) => state.table.table);
  const reservationId = reservations.filter(
    (reservation) => reservation.id === +id
  );

  return (
    <div>
      <ul>
        {reservationId.map((reservation) => (
          <div>
            <li>
              <p>Guest Name: {reservation.name}</p>
              <p>Table number: {reservation.tableNumber}</p>
              <p>Reservation Time: {reservation.time}</p>
              <p>Guests count: {reservation.guests}</p>
              <p>Reservation Date: {reservation.date}</p>
              <p>Guest Phone Number: {reservation.tel}</p>
              <p>Has Birthday: {reservation.holiday}</p>
              <p>Comments: {reservation.comment}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ReservationDetail;
