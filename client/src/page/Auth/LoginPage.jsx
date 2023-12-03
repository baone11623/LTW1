import * as yup from "yup";
import Input from "../../components/input/Input";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AppleIcon,
  GoogleIcon,
  MailIcon,
  PasswordIcon,
} from "../../components/icon";
import Button from "../../components/button/Button";
import Ques from "../part/Ques";
import ButtonLinkAuth from "../part/ButtonLinkAuth";
import HeaderAuth from "../part/HeaderAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOCAL_STORAGE_TOKEN } from "../../utils/LocalStoreName";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../redux/auth/apiRequest";
const Orstyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &::before,
  &::after {
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

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;
const schema = yup.object().shape({
  email: yup
    .string("Invalid email address")
    .email()
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password must be 6 character"),
});
const LoginPage = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetching = useSelector((state) => state?.auth?.login?.isFetching);

  useEffect(() => {
    document.title = "Sign in";
    return () => {
      document.title = "Vite + React";
    };
  });

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    if (token) {
      navigate("/");
    }
  }, []);

  const onSubmitHandler = async (data) => {
    await loginUser(data, dispatch, navigate, toast);
  };

  return (
    <div className="md:max-w-[580px] md:mx-auto  w-auto mx-6">
      <HeaderAuth
        title="Sign In"
        desc="Welcome back, you' ve been missed!"
      ></HeaderAuth>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-darkColors2 md:p-10 md:rounded-[20px] pt-6 px-5 rounded-[6px] pb-6"
      >
        <div className="flex items-center justify-between md:mb-[30px] mb-6 gap-[15px]">
          <ButtonLinkAuth>
            <GoogleIcon></GoogleIcon>
          </ButtonLinkAuth>
          <ButtonLinkAuth>
            <AppleIcon></AppleIcon>
          </ButtonLinkAuth>
        </div>

        <Orstyled className="md:mb-[30px] mb-6 text-heading3Bold font-bold">
          OR
        </Orstyled>

        <div className="flex flex-col gap-5 mb-[20px]">
          <Input
            name="email"
            placeholder="Your Email"
            id="email"
            control={control}
            type="email"
            error={errors?.email?.message}
            className="rounded-[10px] py-[9px]"
          >
            <MailIcon></MailIcon>
          </Input>

          <Input
            name="password"
            placeholder="Inter Password"
            id="password"
            control={control}
            type="password"
            error={errors?.password?.message}
            className="rounded-[10px] py-[9px]"
            eyes={true}
          >
            <PasswordIcon></PasswordIcon>
          </Input>

          <Ques
            to="/forgot"
            textLink="Forgot Password?"
            ques=""
            right={true}
            className="text-white text-bodyBold"
          ></Ques>
        </div>

        <Button
          type="submit"
          className="mb-[30px] text-bodyBold rounded-[6px] py-[9px]"
          name="signin"
          isSubmitting={fetching}
        >
          Sign In
        </Button>
        <Ques
          to="/register"
          ques="Already have an account?"
          textLink="Sign up"
        />
      </form>
    </div>
  );
};

export default LoginPage;
