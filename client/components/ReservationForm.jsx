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
          <label>Ім'я або Номер </label>
          <input
            {...register("name", { required: "Введіть ім'я гостя!" })}
            placeholder="Enter guest name"
          />
          {errors?.name && (
            <p className={styles.formError}>
              {errors?.name?.message || "Помилка!"}
            </p>
          )}

          <label>К-сть гостей</label>
          <input
            type="number"
            {...register("guests")}
            placeholder="Enter guest count"
          />

          <label>Дата Бронювання</label>
          <input
            type="date"
            {...register("date", { required: "Введіть дату бронювання" })}
          />
          {errors?.date && (
            <p className={styles.formError}>
              {errors?.date?.message || "Помилка!"}
            </p>
          )}
        </div>
        <div className={styles.rightBlock}>
          <label>Час бронювання</label>
          <input
            type="time"
            {...register("time", { required: "Введіть час бронювання" })}
          />
          {errors?.time && (
            <p className={styles.formError}>
              {errors?.time?.message || "Помилка!"}
            </p>
          )}

          <label>Номер телефону</label>
          <input {...register("tel")} placeholder="+380" />

          <div className={styles.checkboxWrapper}>
            <label>
              Є день народження
              <input type="checkbox" {...register("holiday")} />
              <span className={styles.checkbox}></span>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.commentary}>
        <label>Додаткові коментарі</label>
        <input
          {...register("comment")}
          placeholder="Введіть спеціальні побажання гостя"
        />
      </div>

      <div className={styles.detailsBtn}>
        <button className={styles.detailBtn} type="submit">
          {submitLabel}
        </button>
        {onDelete && (
          <button className={styles.detailBtn} onClick={onDelete}>
            Видалити бронювання
          </button>
        )}
      </div>
    </form>
  );
};

export default ReservationForm;
