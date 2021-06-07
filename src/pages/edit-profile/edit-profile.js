import compiledTemplate from "./edit-profile.hbs";
import data from "./edit-profile-data";
import "../../helpers/helpers";
import "../../layouts/settings/settings";
import "../../components/controls/controls";
import "../../components/profileContent/profileContent";
import "./edit-profile.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
