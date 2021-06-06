import compiledTemplate from "./login.hbs";
import data from "./login-data";
import "../../helpers/helpers";
import "../../layouts/empty/empty";
import "../../components/form/form";
import "./login.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
