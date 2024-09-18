import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TimePicker, DatePicker } from "antd";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";

import customParseFormat from "dayjs/plugin/customParseFormat";
//styles
import * as styles from "../styles/ReservationForm.module.css";

dayjs.extend(weekday);
dayjs.extend(localeData);

dayjs.extend(customParseFormat);
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
    control,
  } = useForm();

  useEffect(() => {
    if (defaultValues) {
      setValue("name", defaultValues.name);
      setValue("guests", defaultValues.guests);
      setValue("date", dayjs(defaultValues.date, "DD-MM-YYYY"), true);
      setValue("time", dayjs(defaultValues.time, "HH:mm"), true);
      setValue("tel", defaultValues.tel);
      setValue("holiday", defaultValues.holiday);
      setValue("comment", defaultValues.comment);
    }
  }, [defaultValues, setValue]);

  const handleFormSubmit = (data) => {
    const formattedTime = dayjs(data.time).format("HH:mm");
    const formattedDate = dayjs(data.date).format("DD-MM-YYYY");
    const formattedData = {
      ...data,
      time: formattedTime,
      date: formattedDate,
    };
    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles.wrap}>
        <div className={styles.leftBlock}>
          <label>Ім'я або Номер </label>
          <input
            {...register("name", { required: "Введіть ім'я гостя!" })}
            placeholder="Введіть номер або ім'я"
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
            placeholder="Введіть к-сть гостей"
          />

          <label>Дата Бронювання</label>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Введіть дату броннюваня" }}
            render={({ field }) => (
              <DatePicker
                {...field}
                className={styles.time}
                needConfirm={false}
                format="DD-MM-YYYY"
                placeholder="Введіть дату"
                onChange={(date) => field.onChange(date)}
              />
            )}
          />
          {errors?.date && (
            <p className={styles.formError}>
              {errors?.date?.message || "Помилка!"}
            </p>
          )}
        </div>
        <div className={styles.rightBlock}>
          <label>Час бронювання</label>
          <Controller
            name="time"
            control={control}
            rules={{ required: "Введіть час бронювання" }}
            render={({ field }) => (
              <TimePicker
                {...field}
                className={styles.time}
                needConfirm={false}
                placeholder="Введіть час"
                format="HH:mm"
                minuteStep={15}
                showSecond={false}
                onChange={(time) => field.onChange(time)}
              />
            )}
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
