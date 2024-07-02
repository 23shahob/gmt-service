import { Box, TextField } from "@mui/material";
import React from "react";

const Consultation = () => {
  return (
    <div className="mx-auto max-w-[1440px] justify-between px-4 md:px-5 lg:flex lg:px-4">
      <div className="mb-8 lg:mb-0 lg:w-2/5">
        <h3 className="mb-2 text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:mb-6 lg:text-3xl">
          Вам нужна консультация?
        </h3>
        <p className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm md:text-black lg:text-base">
          Задайте их по номеру телефона{" "}
          <span className="text-[#088269]">+7 (495) 000-00-00</span> или
          оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
        </p>
      </div>
      <div className="rounded-[10px] border border-[#E5E2EE] bg-white p-5 lg:w-1/2 lg:p-10">
        <form>
          <Box
            className="md:mb-8 lg:mb-10"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "100%",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "#7A7687",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#088269", // Change border color on hover
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#088269", // Change border color when focused
              },
              "& .MuiInputBase-input": {
                color: "#7A7687",
              },
              "& .MuiInputBase-input:focus": {
                color: "#7A7687", // Change text color when focused
              },
              "& .MuiInputLabel-root": {
                color: "#7A7687",
              },
              "& .MuiInputLabel-root:hover": {
                color: "#088269", // Change label color on hover
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#088269", // Change label color when focused
              },
            }}
            noValidate
            autoComplete="on"
          >
            <div>
              <TextField
                className="w-full"
                id="standard-multiline-flexible"
                label="Ваше имя"
                required
                multiline
                maxRows={1}
                variant="standard"
              />
              <TextField
                className="w-full"
                id="standard-multiline-flexible"
                label="Ваш телефон"
                required
                multiline
                maxRows={1}
                variant="standard"
              />
              <TextField
                className="w-full"
                id="standard-multiline-flexible"
                label="Ваш email"
                required
                multiline
                maxRows={1}
                variant="standard"
              />
              <TextField
                className="w-full"
                required
                id="standard-multiline-flexible"
                label="Ваш вопрос"
                multiline
                maxRows={1}
                variant="standard"
              />
            </div>
          </Box>
          <div className="mt-2 items-center md:flex md:gap-7">
            <button className="mb-3 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:px-[30px] lg:py-[11px] lg:text-sm">
              Отправить
            </button>
            <p className="text-[10px] font-medium text-[#7A7687] lg:text-[12px]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{" "}
              <span className="text-[#088269]">
                Политики конфиденциальности.
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
