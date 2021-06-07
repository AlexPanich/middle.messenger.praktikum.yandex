import compiledTemplate from "./users.hbs";
import data from "./users-data";
import "../../helpers/helpers";
import "../../layouts/base/base";
import "../../components/controls/controls";
import "../../components/contacts/contacts";
import "../../components/profileContent/profileContent";
import "./users.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
