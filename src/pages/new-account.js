import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function NewAcccount() {
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data.username, data.password);
  };
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
