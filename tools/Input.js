"use client";
import React from "react";

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
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-sm font-normal flex gap-1">
        {lebel && lebel}
        {requierd && <spn className="text-red-500 font-bold">*</spn>}
      </div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        autoComplete="off"
        value={value && value}
        onChange={onChange ? onChange : () => {}}
        name={name}
        dir={dir}
        type={type && type}
        className={`text-black focus:!border-none ${className && className}`}
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
            "&.Mui-focused fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "gray",
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
