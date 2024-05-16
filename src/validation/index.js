
// ----------- ValditionRegisterNewUser -----------
export const ValditionRegisterNewUser = (values) => {
    const errors = {};

    if (values.name.length < 4) {
        errors.name = "Name must be form 4 characters";
    }

    if (
        values.email.includes("@") === false &&
        values.email.includes(".") === false
    ) {
        errors.email = "Email not valid";
    }

    if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
        errors.phone = "Phone in valid";
    }

    if (values.password.length < 7 || values.password.length > 15) {
        errors.password = "Password must be form 7 characters to 15 characters";
    }

    if (values.rePassword !== values.password) {
        errors.rePassword = "Password and Repassword not valid";
    }

    return errors;
}



// ----------- ValditionLoginUser -----------
export const ValditionLoginUser = (values) => {
    const errors = {};

    if (
        values.email.includes("@") === false &&
        values.email.includes(".") === false
    ) {
        errors.email = "Email not valid";
    }

    if (values.password.length < 7 || values.password.length > 15) {
        errors.password = "Password must be form 7 characters to 15 characters";
    }

    return errors;
};


// ----------- ValditionEmailForOTP -----------
export const ValditionEmailForOTP = (values) => {
  const errors = {};

  if (
    values.email.includes("@") === false &&
    values.email.includes(".") === false
  ) {
    errors.email = "Email not valid";
  }

  return errors;
};

// ----------- ValditionRest -----------
export const ValditionRest = (values) => {
  const errors = {};

  if (values.resetCode.length > 9  ) {
    errors.resetCode = "resetCode must ";
  }

  return errors;
};

// ----------- ValditionResetPassword -----------
export const ValditionResetPassword = (values) => {
  const errors = {};

  if (
    values.email.includes("@") === false &&
    values.email.includes(".") === false
  ) {
    errors.email = "Email not valid";
  }

  if (values.newPassword.length < 7 || values.newPassword.length > 15) {
    errors.newPassword = "Password must be form 7 characters to 15 characters";
  }

  return errors;
};


// ----------- ValditionPaymentField -----------
export const ValditionPaymentField = (values) => {
  const errors = {};
   if (values.details.length <5) {
     errors.details = "Detailes is require between 5 character";
   }

if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
  errors.phone = "Phone is require!!";
}
 if (values.city.length < 4) {
   errors.city = "City is require!!";
 }

  return errors;
};



// ----------- ValditionChagePaaword -----------
export const ValditionChagePaaword = (values) => {
  const errors = {};

  if (values.currentPassword.length < 7 || values.currentPassword.length > 15) {
    errors.currentPassword ="CurrentPassword must be form 7 characters to 15 characters";
  }

  if (values.password.length < 7 || values.password.length > 15) {
    errors.password = "Password must be form 7 characters to 15 characters";
  }

  if (values.rePassword !== values.password) {
    errors.rePassword = "Password and Repassword not valid";
  }

  return errors;
};


// ----------- ValditionChageUserInfo -----------
export const ValditionChageUserInfo = (values) => {
  const errors = {};

  
    if (values.name.length < 4) {
      errors.name = "Name must be form 4 characters";
    }

 if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
   errors.phone = "Phone is require!!";
 }
 if (
   values.email.includes("@") === false &&
   values.email.includes(".") === false
 ) {
   errors.email = "Email not valid";
 }


  return errors;
};