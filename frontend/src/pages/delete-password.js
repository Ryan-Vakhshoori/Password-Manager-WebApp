import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup
  .object({
    site: yup.string().required(),
  })
  .required();

function DeletePassword() {
  let navigate = useNavigate();
  let { docID } = useParams();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data.site === "password_manager") {
      alert("cannot delete password_manager");
    } else {
      axios
        .delete("http://localhost:3001/passwords/delete-password", {
          data: {
            docID: docID,
            site: data.site,
          },
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
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        site
        <input type="text" {...register("site")} />
      </label>
      <input type="submit" value="delete" />
    </form>
  );
}

export default DeletePassword;
