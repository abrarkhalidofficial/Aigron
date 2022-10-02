import { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import { footer } from "../components/footer";
import { form } from "../components/form";
import { home } from "../components/home.1";
import { office } from "../components/office";
import { expertise } from "../components/expertise";
import { services } from "../components/services";
import { idea } from "../components/idea";

function Home() {
  const [value, setValue] = useState("");
  return (
    <>
      {home()}
      {idea()}
      {services()}
      {expertise()}
      {office()}
      {form(value, setValue)}
      {footer()}
    </>
  );
}

export default Home;
