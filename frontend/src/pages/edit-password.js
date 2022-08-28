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

function EditPassword() {
  let navigate = useNavigate();
  let { docID } = useParams();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios.put("http://localhost:3001/passwords/edit-password", {
      docID: docID,
      site: data.site,
      username: data.username,
      password: data.password,
    })
    .then(function (response) {
      if (response.status === 201) {
        alert(response.data.message);
      } else {
        navigate(-1);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        site
        <input type="text" {...register("site")} />
      </label>
      <br />
      <label>
        new username
        <input type="text" {...register("username")} />
      </label>
      <br />
      <label>
        new password
        <input type="text" {...register("password")} />
      </label>
      <input type="submit" value="edit" />
    </form>
  );
}

export default EditPassword;
