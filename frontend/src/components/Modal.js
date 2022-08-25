import ReactModal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup
  .object({
    site: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function Modal(props) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/passwords/new-password", {
        docID: props.docID,
        site: data.site,
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        setIsOpen(false);
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            site
            <input type="text" {...register("site")} />
          </label>
          <br />
          <label>
            username
            <input type="text" {...register("username")} />
          </label>
          <br />
          <label>
            password
            <input type="text" {...register("password")} />
          </label>
          <input type="submit" />
        </form>
        <button onClick={closeModal}>cancel</button>
      </ReactModal>
    </div>
  );
}

export default Modal;
