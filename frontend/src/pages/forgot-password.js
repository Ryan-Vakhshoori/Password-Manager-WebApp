import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    username: yup.string().required(),
  })
  .required();

function ForgotPassword() {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    axios
      .get("http://localhost:3001/users/forgot-password", {
        params: {
          username: data.username,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          navigate(`/reset-password/${response.data}/${data.username}`);
        } else {
          alert("username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        username
        <input type="string" {...register("username")} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default ForgotPassword;
