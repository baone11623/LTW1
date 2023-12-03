import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import WaveLoading from "../../components/loader/WaveLoading";
import Ques from "../part/Ques";
import Input from "../../components/input/Input";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import {
  AppleIcon,
  DateIcon,
  FemaleIcon,
  GoogleIcon,
  MailIcon,
  MaleIcon,
  NameIcon,
  PasswordIcon,
} from "../../components/icon";
import ButtonLinkAuth from "../part/ButtonLinkAuth";
import HeaderAuth from "../part/HeaderAuth";
import Radio from "../../components/radio/Radio";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOCAL_STORAGE_TOKEN } from "../../utils/LocalStoreName";
import { endpoint } from "../../utils/endpoint";
const OrStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    max-width: 217px;
    width: 100%;
    background-color: #4e5d78;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 46.1875em) {
      max-width: 126px;
    }
  }
  &::after {
    left: 0;
  }
  &::before {
    right: 0;
  }
`;

const schema = yup.object().shape({
  email: yup
    .string("Invalid email address")
    .email()
    .required("This field is required"),
  username: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
  dateofbirth: yup.string().required("This field is required"),
});

const RegisterPage = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Register";
    return () => {
      document.title = "Vite + React";
    };
  });

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    if (token) {
      navigate("/");
    }
  });

  const onSubmitHandler = async (data) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      setLoading(true);
      console.log(data);
      const res = await axios.post(`${endpoint}/register`, data, config);
      console.log(res);
      reset({
        username: "",
        email: "",
        password: "",
        gender: "male",
      });
      toast.warning("An email sent to your account. Please verify");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const watchGender = watch("gender");
  return (
    <div className="md:max-w-[580px] md:mx-auto w-auto mx-6">
      <HeaderAuth
        title="Getting Started"
        desc="Create an account to continue and connect with the people."
      ></HeaderAuth>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-darkColors2 md:p-10 md:rounded-[20px] pt-6 px-5 rounded-[6px] pb-6"
      >
        <div className="flex justify-between items-center md:mb-[30px] mb-6 gap-[15px]">
          <ButtonLinkAuth>
            <GoogleIcon></GoogleIcon>
          </ButtonLinkAuth>
          <ButtonLinkAuth link="https://apple.com" text="Log in with Apple">
            <AppleIcon></AppleIcon>
          </ButtonLinkAuth>
        </div>

        <OrStyled className="md:mb-[30px] mb-6 text-heading3Bold font-bold">
          OR
        </OrStyled>

        <div className="flex flex-col gap-5 mb-[30px]">
          <Input
            name="email"
            placeholder="Your Email"
            id="email"
            control={control}
            type="email"
            error={errors?.email?.message}
            className="rounded-[6px] py-[9px]"
          >
            <MailIcon></MailIcon>
          </Input>
          <Input
            name="username"
            placeholder="Your Name"
            id="username"
            control={control}
            type="text"
            error={errors?.username?.message}
            className="rounded-[6px] py-[9px]"
          >
            <NameIcon></NameIcon>{" "}
          </Input>

          <Input
            name="password"
            placeholder="Create Password"
            id="password"
            type="password"
            error={errors?.password?.message}
            control={control}
            className="rounded-[6px] py-[9px]"
            eyes={true}
          >
            <PasswordIcon></PasswordIcon>
          </Input>

          <div className="flex flex-col md:flex-row gap-5">
            <Input
              name="dateofbirth"
              placeholder="Date of birth"
              id="date"
              type="text"
              error={errors?.password?.date}
              control={control}
              className="rounded-[6px] py-[9px] md:w-[240px]"
            >
              <DateIcon></DateIcon>
            </Input>
            <div className="md:w-[240px] w-full border border-[#4E5D78] rounded-[6px] md:rounded-[10px] md:py-[14px] py-[9px] flex text-white items-center gap-[18px]">
              <span className="pl-[18px]">
                {watchGender === "male" ? (
                  <MaleIcon></MaleIcon>
                ) : (
                  <FemaleIcon></FemaleIcon>
                )}
              </span>
              <div className="flex items-center gap-5">
                <Radio
                  control={control}
                  name="gender"
                  value="male"
                  checked={watchGender === "male"}
                >
                  Male
                </Radio>
                <Radio
                  control={control}
                  name="gender"
                  value="female"
                  checked={watchGender === "female"}
                >
                  Female
                </Radio>
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="mb-[20px] text-bodyBold rounded-[6px] py-[9px]"
          name="signup"
          isSubmitting={loading ? <WaveLoading></WaveLoading> : ""}
        >
          Sign Up
        </Button>
        <Ques to="/login" ques="Already have an account?" textLink="Sign In" />
      </form>
    </div>
  );
};

export default RegisterPage;
