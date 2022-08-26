import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup
  .object({
    site: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function NewPassword() {
  let navigate = useNavigate();
  let { docID } = useParams();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/passwords/new-password", {
        docID: docID,
        site: data.site,
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        navigate(-1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
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
  );
}

export default NewPassword;
