"use client";
import React, { useState } from "react";

import Btn from "@/tools/Btn";
import Input from "@/tools/Input";
import useInputValidation from "@/hooks/UseValidation";

import { Dialog } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

function Form() {
  //states
  const [confirmSend, setConfirmSend] = useState(false);

  //form values
  const [formValue, setFormValue] = useState({
    name: "",
    telephone: "",
    phone: "",
    caracter: "",
  });

  //validations
  const phonePattern = /((0?9)|(\+?989))\d{9}/;
  const phoneValidation = useInputValidation(formValue.phone, phonePattern);

  const telephonePattern = /^0\d{2,3}\d{8}$/;
  const telephoneValidation = useInputValidation(
    formValue.telephone,
    telephonePattern
  );

  //handlers
  const changeHandler = (event) => {
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const disableHandler = () => {
    if (
      formValue.name &&
      formValue.telephone &&
      formValue.phone &&
      formValue.caracter &&
      phoneValidation.isValid &&
      telephoneValidation.isValid
    ) {
      return false;
    } else {
      return true;
    }
  };

  const closeHandler = () => {
    setFormValue({
      name: "",
      telephone: "",
      phone: "",
      caracter: "",
    });
    setConfirmSend(false);
  };

  const submiteHandler = () => {
    setConfirmSend(true);
  };

  return (
    <div className="bg-white flex flex-col gap-4 justify-center p-5 rounded-xl md:!w-[50%] w-full">
      <Input
        lebel="نام و نام خانوادگی"
        className="!w-full"
        name="name"
        type="text"
        requierd={true}
        onChange={changeHandler}
        value={formValue.name}
        status={formValue.name ? "success" : ""}
      />
      <div>
        <Input
          lebel="شماره تماس ثابت ( به همراه کد شهر )"
          className="!w-full"
          name="telephone"
          type="tel"
          dir="ltr"
          requierd={true}
          onChange={changeHandler}
          value={formValue.telephone}
          maxLengthNum={11}
          status={
            formValue.telephone
              ? telephoneValidation.isValid
                ? "success"
                : "error"
              : ""
          }
        />
        {formValue.telephone && !telephoneValidation.isValid && (
          <p className="text-xs text-red-500">
            شماره تماس ثابت وارد شده صحیح نمی باشد!
          </p>
        )}
      </div>
      <div>
        <Input
          lebel="شماره موبایل"
          className="!w-full"
          name="phone"
          type="tel"
          dir="ltr"
          requierd={true}
          onChange={changeHandler}
          value={formValue.phone}
          maxLengthNum={11}
          status={
            formValue.phone
              ? phoneValidation.isValid
                ? "success"
                : "error"
              : ""
          }
        />
        {formValue.phone && !phoneValidation.isValid && (
          <p className="text-xs text-red-500">
            شماره موبایل وارد شده صحیح نمی باشد!
          </p>
        )}
      </div>

      <Input
        lebel="لطفا کاراکترها را تایپ کنید"
        className="!w-full"
        name="caracter"
        type="text"
        dir="ltr"
        requierd={true}
        onChange={changeHandler}
        value={formValue.caracter}
        status={formValue.caracter ? "success" : ""}
      />
      <Btn
        label="ارسال"
        colored={true}
        onClick={submiteHandler}
        disable={disableHandler()}
      ></Btn>

      {/* confirm send form */}
      {confirmSend && (
        <Dialog open={confirmSend}>
          <div className="!w-[300px] !h-[200px] p-5 flex flex-col justify-around items-center gap-4">
            <CheckCircle fontSize="large" color="success" />
            <div className="font-bold">اطلاعات شما با موفقیت ثبت شد!</div>
            <Btn label="بستن" onClick={closeHandler}></Btn>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default Form;
