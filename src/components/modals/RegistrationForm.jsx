import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authReducer";

const RegistrationForm = ({ onClose }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateInputs = () => {
    const errors = {};
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/i;

    if (!emailValidation.test(values.email)) {
      errors.email = "Invalid email format.";
    }
    if (!passwordValidation.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, and a number.";
    }

    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(login(values));
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="transition duration-500 ease-in-out">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
        <div className="w-full rounded-[10px] border border-[#E5E2EE] bg-white p-5 shadow-lg sm:w-96 lg:w-[500px]">
          <div className="mb-7 flex items-center justify-between lg:mb-10">
            <h2 className="text-base font-semibold leading-[136%] lg:text-lg lg:leading-normal">
              Регистрация
            </h2>
            <button onClick={onClose}>
              <IoMdClose className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-5 h-7 md:mb-8">
              <input
                className="h-full w-full border-b border-[#7A7687] pb-3 text-xs font-normal text-[#7A7687] outline-none lg:text-sm"
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Ваш email*"
              />
              {errors.email && (
                <p className="mb-5 mt-1 text-[10px] text-red-500 lg:text-xs">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-10 h-7 lg:mb-12">
              <input
                className="h-full w-full border-b border-[#7A7687] pb-3 text-xs font-normal text-[#7A7687] outline-none lg:text-sm"
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                placeholder="Пароль*"
              />
              {errors.password && (
                <p className="mb-5 mt-1 text-[10px] text-red-500 lg:text-xs">
                  {errors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="mb-5 w-full rounded-[50px] bg-[#088269] py-2 text-xs font-semibold leading-[140%] text-[#F8F7F3] outline-none transition duration-300 ease-in-out hover:bg-[#07745E] lg:py-[11px] lg:text-sm lg:leading-normal"
            >
              Регистрация
            </button>
            <div className="hidden gap-3 lg:flex">
              <input type="checkbox" className="h-5 w-5" />
              <p className="text-[10px] font-medium text-[#7A7687] lg:text-xs">
                Я соглашаюсь c обработкой персональных данных на условиях
                <span className="text-[#088269]">
                  {" "}
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
