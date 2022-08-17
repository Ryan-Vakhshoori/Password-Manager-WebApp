import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    site: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setIsOpen(false);
    console.log(data.site, data.username, data.password)
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>add new password</button>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Site
            <input
              type="text"
              {...register("site")}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              {...register("username")}
            />
          </label>
          <label>
            Password
            <input
              type="text"
              {...register("password")}
            />
          </label>
          <input type="submit" />
        </form>
        <button onClick={closeModal}>cancel</button>
      </ReactModal>
    </div>
  );
};

export default Modal;
