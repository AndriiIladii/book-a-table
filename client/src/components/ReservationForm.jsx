//node modules
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
//styles
import * as styles from "../styles/ReservationForm.module.css";

const ReservationForm = ({
  onSubmit,
  submitLabel,
  defaultValues,
  onDelete,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      setValue("name", defaultValues.name);
      setValue("guests", defaultValues.guests);
      setValue("date", defaultValues.date);
      setValue("time", defaultValues.time);
      setValue("tel", defaultValues.tel);
      setValue("holiday", defaultValues.holiday);
      setValue("comment", defaultValues.comment);
    }
  }, [defaultValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.wrap}>
        <div className={styles.leftBlock}>
          <label>Name</label>
          <input
            {...register("name", { required: "Enter guest name!" })}
            placeholder="Enter guest name"
          />
          {errors?.name && (
            <p className={styles.formError}>
              {errors?.name?.message || "Error!"}
            </p>
          )}

          <label>Guest count</label>
          <input
            type="number"
            {...register("guests")}
            placeholder="Enter guest count"
          />

          <label>Booking date</label>
          <input
            type="date"
            {...register("date", { required: "Enter reservation date" })}
          />
          {errors?.date && (
            <p className={styles.formError}>
              {errors?.date?.message || "Error!"}
            </p>
          )}
        </div>
        <div className={styles.rightBlock}>
          <label>Booking Time</label>
          <input
            type="time"
            {...register("time", { required: "Enter booking time" })}
          />
          {errors?.time && (
            <p className={styles.formError}>
              {errors?.time?.message || "Error!"}
            </p>
          )}

          <label>Phone number</label>
          <input type="tel" {...register("tel")} placeholder="+380" />

          <div className={styles.checkboxWrapper}>
            <label>
              Has birthday
              <input type="checkbox" {...register("holiday")} />
              <span className={styles.checkbox}></span>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.commentary}>
        <label>Notes</label>
        <input {...register("comment")} placeholder="Enter special requests" />
      </div>

      <div className={styles.detailsBtn}>
        <button className={styles.detailBtn} type="submit">
          {submitLabel}
        </button>
        {onDelete && (
          <button className={styles.detailBtn} onClick={onDelete}>
            Delete Reservation
          </button>
        )}
      </div>
    </form>
  );
};

export default ReservationForm;
