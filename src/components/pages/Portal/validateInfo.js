export default function validateInfo(values) {
  let errors = {};

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password !== "ncr") {
    errors.password = "Password is incorrect";
  } 

  return errors;
}
