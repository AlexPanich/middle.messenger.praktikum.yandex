import compiledTemplate from "./page500.hbs";
import data from "./page500-data";
import "../../helpers/helpers";
import "./page500.scss";
import "../../layouts/empty/empty";
import "../../components/errorPageContent/errorPageContent";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
