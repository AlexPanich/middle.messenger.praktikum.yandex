import compiledTemplate from "./profile.hbs";
import data from "./profile-data";
import "../../helpers/helpers";
import "../../layouts/settings/settings";
import "../../components/controls/controls";
import "../../components/profileContent/profileContent";
import "./profile.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
