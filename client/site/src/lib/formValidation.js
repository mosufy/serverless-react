export const minField = (val, min = 3) => {
  if (val.length >= min) return null;
  else return `Require ${min} or more characters.`;
};

export const emailFormat = (val) => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = re.test(val);

  if (!valid) return `Please enter a valid email address.`;
  else return null;
};

export const checkboxRequired = (val) => {
  if (val === true || val === 'true') return null;
  else return `Please agree to the Terms of Service to continue.`;
};

export const required = (val) => {
  if (val.length === 0) return `This field is required`;
  else return null;
};