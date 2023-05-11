import React, { useRef, useState } from "react";
import BlackButton from "../components/BlackButton";
import InputField from "../components/InputField";
import FileUploader from "../components/FileUploder";
import { PinLogo } from "../components/Logo";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const ButtonItems = [
  { id: 1, label: "Site from scratch", label2: "САЙТ С НУЛЯ" },
  { id: 2, label: "App from scratch", label2: "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ С НУЛЯ" },
  { id: 3, label: "UX/UI design", label2: "ДИЗАЙН ИНТЕРФЕЙСА" },
  { id: 4, label: "Mobile development", label2: "МОБИЛЬНАЯ РАЗРАБОТКА" },
  { id: 5, label: "Branding", label2: "БРЕНДИНГ" },
  { id: 6, label: "Concept for product", label2: "КОНЦЕПЦИЯ ПРОДУКТА" },
  { id: 7, label: "Web development", label2: "ВЕБ РАЗРАБОТКА" },
];
const Budgets = [
  { id: 1, label: "5-10k$" },
  { id: 2, label: "10-20k$" },
  { id: 3, label: "30-50k$" },
  { id: 4, label: "50-100k$" },
];
export default function Section6({ selectedLanguage }) {
  const form = useRef();
  const { t } = useTranslation();
  const [attachment, setAttachment] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleInputNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const newForm = {
      name: name,
      email: email,
      description: desc,
      // file: attachment,
      interested: selectedItems,
      budget: selectedBudget.label,
    };
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        newForm,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => console.log("Successfully sent", result.text),
        (error) => console.log("message sent failed", error.txt)
      );
    console.log(newForm);

    setName("");
    setEmail("");
    setDesc("");
    setSelectedItems([]);
    setSelectedBudget("");
  };
  const handleSelect = (item) => {
    const result = selectedItems.filter((ii) => ii === item)[0];
    result
      ? setSelectedItems(selectedItems.filter((ii) => ii !== item))
      : setSelectedItems([...selectedItems, item]);
  };
  return (
    <div className="bg-white 2xl:px-32 xl:px-32 lg:px-28 px-5 2xl:pt-28 xl:pt-28 lg:pt-28 py-14 2xl:pb-20 xl:pb-20 lg:pb-20 md:pb-20">
      <div
        className={`${
          selectedLanguage.key === "en"
            ? "landingText 2xl:text-[30px] xl:text-[24px] lg:text-[19px] md:text-[17px] text-[16px]"
            : "font-CoFoKakBlack 2xl:text-[30px] xl:text-[24px] lg:text-[19px] md:text-[17px] text-[26px]"
        } font-bold`}
      >
        {t("hello! tell us all the things!")} 🖖
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-8 pt-[2rem]">
          <div className="font-Inter 2xl:text-3xl xl:text-2xl lg:text-[18px] md:text-[17px] text-[12px] font-bold text-[#939393]">
            {t("interested")}
          </div>

          <div className="gap-4 hidden sm:flex">
            {[1, 2, 3, 5].map((item) => (
              <BlackButton
                key={item}
                type="type1"
                onClick={() => {
                  handleSelect(item);
                }}
                selected={selectedItems.includes(item)}
              >
                {selectedLanguage.key === "en"
                  ? ButtonItems.filter((button) => button.id === item)[0].label
                  : ButtonItems.filter((button) => button.id === item)[0]
                      .label2}
              </BlackButton>
            ))}
          </div>
          <div className="gap-4 hidden sm:flex">
            {[4, 6, 7].map((item) => (
              <BlackButton
                key={item}
                type="type1"
                onClick={() => {
                  handleSelect(item);
                }}
                selected={selectedItems.includes(item)}
              >
                {selectedLanguage.key === "en"
                  ? ButtonItems.filter((button) => button.id === item)[0].label
                  : ButtonItems.filter((button) => button.id === item)[0]
                      .label2}
              </BlackButton>
            ))}
          </div>
          <div className="flex flex-col gap-2 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1">
                <div className="flex flex-col gap-1">
                  {[1, 3, 5, 6].map((item) => (
                    <BlackButton
                      type="type1"
                      key={item}
                      onClick={() => {
                        handleSelect(item);
                      }}
                      selected={selectedItems.includes(item)}
                    >
                      {selectedLanguage.key === "en"
                        ? ButtonItems.filter((button) => button.id === item)[0]
                            .label
                        : ButtonItems.filter((button) => button.id === item)[0]
                            .label2}
                    </BlackButton>
                  ))}
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-1">
                  {[2, 4, 7].map((item) => (
                    <BlackButton
                      key={item}
                      type="type1"
                      onClick={() => {
                        handleSelect(item);
                      }}
                      selected={selectedItems.includes(item)}
                    >
                      {selectedLanguage.key === "en"
                        ? ButtonItems.filter((button) => button.id === item)[0]
                            .label
                        : ButtonItems.filter((button) => button.id === item)[0]
                            .label2}
                    </BlackButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="xl:col-span-8 lg:col-span-8 md:col-span-8 sm-col-span-8 col-span-12">
              <input
                value={name}
                onChange={(e) => handleInputNameChange(e)}
                placeholder={t("your name")}
                required
                className="w-full border-b-[1px] border-[#939393] pr-4 py-4 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-2xl text-[12px]"
              ></input>
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
                placeholder={t("your email")}
                required
                className="w-full border-b-[1px] border-[#939393] pr-4 py-4 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-2xl text-[12px]"
              ></input>
              <textarea
                required
                value={desc}
                onChange={(e) => handleDescChange(e)}
                rows="1"
                placeholder={t("tell about")}
                className="w-full border-b-[1px] border-[#939393] pr-4 py-4 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-2xl text-[12px]"
              />
              <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[12px] text-[#939393] pt-10">
                {t("project budget")}
              </div>
              <div className="gap-4 hidden sm:flex pt-4">
                {Budgets.map((budget) => (
                  <BlackButton
                    type="type2"
                    key={`budget-${budget.id}`}
                    onClick={() => setSelectedBudget(budget)}
                    selected={selectedBudget === budget}
                  >
                    {budget.label}
                  </BlackButton>
                ))}
              </div>
              <div className="flex flex-col gap-2 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden pt-4">
                <div className="flex gap-1">
                  {[1, 2, 3].map((budget) => (
                    <BlackButton
                      type="type2"
                      key={`budget-${budget}`}
                      onClick={() => setSelectedBudget(budget)}
                      selected={selectedBudget === budget}
                    >
                      {Budgets?.filter((bud) => bud.id === budget)[0].label}
                    </BlackButton>
                  ))}
                </div>
                <div className="flex gap-1">
                  {[4].map((budget) => (
                    <BlackButton
                      type="type2"
                      key={`budget-${budget}`}
                      onClick={() => setSelectedBudget(budget)}
                      selected={selectedBudget === budget}
                    >
                      {Budgets?.filter((bud) => bud.id === budget)[0].label}
                    </BlackButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex">
            <div className="w-8 h-9 flex items-center">
              <PinLogo />
            </div>
            <FileUploader setAttachment={setAttachment} />
          </div> */}
          <div>
            <button
              // onClick={() => sendEmail()}
              type="submit"
              className="bg-black border-[0.5px] border-white text-white sm:text-2xl text-[17px] py-4 px-14 rounded-full hover:bg-white hover:text-black  hover:border-2 hover:border-black"
            >
              {t("send request")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
