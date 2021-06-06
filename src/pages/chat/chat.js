import compiledTemplate from "./chat.hbs";
import data from "./chat-data";
import "../../helpers/helpers";
import "../../layouts/base/base";
import "../../components/controls/controls";
import "../../components/contacts/contacts";
import "../../components/messager/messager";
import "./chat.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);
