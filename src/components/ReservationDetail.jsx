import React from "react";
import { useParams } from "react-router-dom";

const ReservationDetail = () => {
  const { id } = useParams();

  console.log({ id });

  return <div>Reservation ID: {id}</div>;
};

export default ReservationDetail;
