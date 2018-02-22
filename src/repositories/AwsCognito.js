import confirmationMessage from "../assets/templates/confirmationMessage";
import config from "../config";

class AwsCognito {
  setCustomMessage(event) {
    if (event.triggerSource === "CustomMessage_SignUp") {
      let activationLink = `${config.app.SITE_LINK}/auth/confirm-registration?code=${event.request.codeParameter}`;

      event.response.emailSubject = "Welcome to Sher Tuition"; // event.request.codeParameter = verification code
      event.response.emailMessage = confirmationMessage(activationLink);
    }

    return event;
  }
}

export default AwsCognito;