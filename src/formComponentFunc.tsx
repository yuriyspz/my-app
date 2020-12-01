import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";

interface IFormComponentFunc {
  title: string
  //inputValue: string
  // handleInputChange:(e:React.ChangeEvent<HTMLInputElement>):void=>{},
  // handleSubmit:(e:React.FormEvent<HTMLFormElement>):void=>{}
}

export const FormComponentFunc:React.FC<IFormComponentFunc> = (props:IFormComponentFunc) => {
  const [inputValue, setInputValue] = React.useState<String>("");
  const dispatch = useDispatch()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="inputValue" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
