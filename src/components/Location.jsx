import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Location = () => {
  return (
    <div className="mx-auto mb-[150px] max-w-[1440px]">
      <div className="flex gap-[10px]">
        <div className="w-1/2 rounded-[10px] border border-[#E5E2EE] p-[1px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.973360480749!2d69.20404123380254!3d41.28528633075618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719314050373!5m2!1sru!2s"
            className="h-[600px] w-full rounded-[10px]"
          ></iframe>
        </div>
        <div className="w-1/2 rounded-[10px] border border-[#E5E2EE] p-10">
          <h1 className="mb-6 text-[30px] font-medium leading-[120%]">
            Остались вопросы?
          </h1>
          <p className="mb-10 font-medium leading-[140%] text-[#7A7687]">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <form action="">
            <Box
              className="mb-10"
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
            <div className="flex gap-7">
              <button className="rounded-[50px] bg-[#088269] px-[30px] py-[11px] text-sm font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E]">
                Отправить
              </button>
              <p className="text-[12px] font-medium text-[#7A7687]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{" "}
                <span className="text-[#088269]">
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

export default Location;
