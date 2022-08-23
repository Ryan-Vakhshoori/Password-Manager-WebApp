import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function NewAcccount() {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data.username, data.password);
    navigate("/passwords");
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
      <input type="submit" />
    </form>
  );
}

export default NewAcccount;
