import compiledTemplate from "./change-chat.hbs";
import data from "./change-chat-data";
import "../../helpers/helpers";
import "../../layouts/base/base";
import "../../components/controls/controls";
import "../../components/contacts/contacts";
import "./change-chat.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
