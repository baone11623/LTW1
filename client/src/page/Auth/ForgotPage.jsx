import Ques from "../part/Ques";
import Button from "../../components/button/Button";
import { MailIcon, PasswordIcon } from "../../components/icon";
import Input from "../../components/input/Input";
import HeaderAuth from "../part/HeaderAuth";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { endpoint } from "../../utils/endpoint";
import axios from "axios";
const schema = yup.object().shape({
  email: yup
    .string("Invalid email address")
    .email()
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
  cfpassword: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});
const ForgotPage = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Forgot Password";
    return () => {
      document.title = "Vite + React";
    };
  });
  const onSubmitHandler = async (data) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      setLoading(true);
      if (data.password !== data.cfpassword) {
        toast.error("Confirm password not match new password");
        setLoading(false);
        return;
      }
      const res = await axios.post(`${endpoint}/forgot`, data, config);
      console.log(res);
      toast.warning("An email sent to your account");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="md:max-w-[580px] md:mx-auto w-auto mx-6 ">
      <HeaderAuth
        title="Forgot Password?"
        desc="Enter your details to receive a rest link"
      ></HeaderAuth>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-darkColors2 md:p-10 md:rounded-[20px] pt-6 px-5 rounded-[6px] pb-6"
      >
        <div className="flex flex-col mb-[20px] gap-5">
          <Input
            name="email"
            placeholder="Your email"
            id="email"
            control={control}
            type="email"
            error={errors?.email?.message}
            className="rounded-[6px] py-[9px] "
          >
            <MailIcon></MailIcon>
          </Input>

          <Input
            name="password"
            placeholder="New password"
            id="password"
            control={control}
            type="password"
            error={errors?.password?.message}
            className="rounded-[6px] py-[9px] "
          >
            <PasswordIcon></PasswordIcon>
          </Input>

          <Input
            name="cfpassword"
            placeholder="Confirm password"
            id="cfpassword"
            control={control}
            type="password"
            error={errors?.cfpassword?.message}
            className="rounded-[6px] py-[9px] "
          >
            <PasswordIcon></PasswordIcon>
          </Input>
        </div>

        <Button
          type="submit"
          className="text-bodyBold mb-[20px] py-[9px] rounded-[6px]"
          isSubmitting={loading}
        >
          Send
        </Button>
        <Ques ques="" textLink="< Back to Sign In"></Ques>
      </form>
    </div>
  );
};

export default ForgotPage;
