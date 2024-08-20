import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
//styles
import * as styles from "../styles/ReservationForm.module.css";

const ReservationForm = ({ onSubmit, submitLabel, defaultValues }) => {
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
          <input type="time" {...register("time")} />

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

      <button className={styles.formBtn} type="submit">
        {submitLabel}
      </button>
    </form>
  );
};

export default ReservationForm;
