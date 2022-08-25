import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function Login() {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    axios
      .get("http://localhost:3001/users/login", {
        params: {
          username: data.username,
          password: data.password,
        },
      })
      .then(function (response) {
        navigate("/passwords");
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        username
        <input type="text" {...register("username")} />
      </label>
      <br />
      <label>
        password
        <input type="text" {...register("password")} />
      </label>
      <input type="submit" value="login" />
    </form>
  );
}

export default Login;
