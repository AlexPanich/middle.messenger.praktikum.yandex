import compiledTemplate from "./page404.hbs";
import data from "./page404-data";
import "../../helpers/helpers";
import "../../layouts/empty/empty";
import "../../components/errorPageContent/errorPageContent";
import "./page404.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
