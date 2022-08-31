import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup
  .object({
    password: yup.string().required(),
  })
  .required();

function ResetPassword() {
  let navigate = useNavigate();
  let { docID } = useParams();
  let { username } = useParams();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    axios
      .put("http://localhost:3001/users/reset-password", {
        docID: docID,
        username: username,
        password: data.password,
      })
      .then(function (response) {
        navigate(`/passwords/${docID}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        new password
        <input type="text" {...register("password")} />
      </label>
      <input type="submit" value="reset" />
    </form>
  );
}

export default ResetPassword;
