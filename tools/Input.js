"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const Input = ({
  lebel = "",
  className,
  dir = "rtl",
  type = "text",
  name = "",
  requierd = false,
  onChange,
  value = "",
  maxLengthNum,
  status = "",
}) => {
  const [border, setBorder] = useState("gray");

  useEffect(() => {
    if (status === "success") {
      setBorder("green");
    } else if (status === "error") {
      setBorder("red");
    } else {
      setBorder("gray");
    }
  }, [status, value]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-sm font-normal flex gap-1">
        {lebel && lebel}
        {requierd && <span className="text-red-500 font-bold">*</span>}
      </div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        autoComplete="off"
        value={value}
        inputProps={{ maxLength: maxLengthNum }}
        onChange={onChange || (() => {})}
        name={name}
        dir={dir}
        type={type}
        className={`text-black focus:!border-none ${
          className && className
        }`}
        sx={{
          "& .MuiInputBase-root": {
            height: 35,
            borderRadius: "5px",
            margin: "0px",
          },
          "& .MuiOutlinedInput-root": {
            paddingRight: "2px",
          },
          "& .MuiOutlinedInput-root": {
            "& input": {
              paddingLeft: "10px",
              paddingRight: "10px",
            },
            "& fieldset": {
              borderColor: border,
              borderWidth:"2px"
            },
            "&.Mui-focused fieldset": {
              borderColor: border,
              borderWidth:"2px"
            },
            "&:hover fieldset": {
              borderColor: border,
              borderWidth:"2px"
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "black",
            },
          },
        }}
      />
    </div>
  );
};
export default Input;
