import confirmationMessage from "../../../assets/templates/confirmationMessage";
import config from "../../../config";

export const handler = (event, context) => {
  context.done(null, setCustomMessage(event));
};

const setCustomMessage = (event) => {
  if (event.triggerSource === "CustomMessage_SignUp") {
    let activationLink = `${config.app.SITE_LINK}/auth/confirm-registration?username=${encodeURIComponent(event.userName)}&confirmation-code=${event.request.codeParameter}`;

    event.response.emailSubject = "Welcome to Sher Tuition";
    event.response.emailMessage = confirmationMessage(activationLink);
  }

  return event;
};