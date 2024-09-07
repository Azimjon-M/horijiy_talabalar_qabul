import { useContext } from "react";
import { TogglerLang } from "../../context/language";
import langData from "../../language/idex.json";

const TextTranslate = ({ id }) => {
    const { isLang } = useContext(TogglerLang);
    return langData[isLang][id];
};

export default TextTranslate;
