import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// Sample of REACT HOOK FORM Library
export default function About() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  useEffect(() => {
    toast("Try Lazy Component");
  },[])

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      Form Sample by React Hook Form
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>

      <br />
      <Link to="/about/lazy" >Lazy Component</Link>
      <br /><br />
    </>
  );
}
