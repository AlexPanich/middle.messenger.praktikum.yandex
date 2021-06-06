import compiledTemplate from "./registration.hbs";
import data from "./registration-data";
import "../../helpers/helpers";
import "../../layouts/empty/empty";
import "../../components/form/form";
import "./registration.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
