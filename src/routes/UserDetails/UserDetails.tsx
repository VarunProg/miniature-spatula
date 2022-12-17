import React, { FC, useState } from "react";
import classes from "./UserDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { confirmOrder } from "../../services/orderService";
import { getRecipes } from "../../redux/slices/recipesSlice";
import { setError } from "../../redux/slices/globalSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Button, FormInput } from "../../components";
import { setOrderStage } from "../../redux/slices/globalSlice";

interface CustomerFormData {
  firstName: string;
  email: string;
}

interface ErrorRecord {
  label: string;
  isValid: boolean;
  errorMsg: string;
}

interface CustomerFormErrors {
  firstName: ErrorRecord;
  email: ErrorRecord;
}

export const UserDetails: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list, selectedRecipes } = useAppSelector(getRecipes);
  const selectedRecipesList = list.filter(
    (recipe) => selectedRecipes.findIndex((id) => id === recipe.id) > -1
  );
  const [customerData, setCustomerData] = useState<CustomerFormData>({
    firstName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<CustomerFormErrors>({
    firstName: { label: "first name", isValid: true, errorMsg: "" },
    email: { label: "email", isValid: true, errorMsg: "" },
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    let customerUpdatedData = { ...customerData };
    customerUpdatedData[key as keyof typeof customerData] =
      event.currentTarget.value;
    setCustomerData(customerUpdatedData);
    validateForm();
  };

  const validateEmail = (email: string) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
  };

  const validateForm = () => {
    let updatedFormErrors = { ...formErrors };
    let isFormValid = true;
    Object.keys(customerData).forEach((key: string) => {
      const errObjKey = key as keyof typeof updatedFormErrors;
      if (customerData[key as keyof typeof customerData] === "") {
        updatedFormErrors[errObjKey].isValid = false;
        updatedFormErrors[errObjKey].errorMsg =
          "Please enter " + updatedFormErrors[errObjKey].label;
        isFormValid = false;
      } else if (key === "email" && !validateEmail(customerData[key])) {
        updatedFormErrors[errObjKey].isValid = false;
        updatedFormErrors[errObjKey].errorMsg =
          "Please enter valid " + updatedFormErrors[key].label;
        isFormValid = false;
      } else {
        updatedFormErrors[errObjKey].isValid = true;
        updatedFormErrors[errObjKey].errorMsg = "";
      }
    });
    setFormErrors(updatedFormErrors);
    return isFormValid;
  };

  const onContinue = () => {
    const isValidData = validateForm();
    if (isValidData) {
      const requestData = {
        ...customerData,
        recipes: [...selectedRecipes],
      };
      confirmOrder(requestData)
        .then((resp) => {
          navigate(ROUTES.CONFIRMATION);
          dispatch(setOrderStage(2));
        })
        .catch((err) => {
          dispatch(setError(err));
        });
    }
  };

  return (
    <div className={classes.userFormContainer}>
      <form className={classes.userDetails}>
        <label className={classes.pageTitle}>{"Enter Your Details"}</label>
        <FormInput
          label="First Name"
          placeholder="Enter first name"
          name="firstName"
          value={customerData.firstName}
          onChange={(e) => onChange(e, "firstName")}
          valid={formErrors.firstName.isValid}
          errorMsg={formErrors.firstName.errorMsg}
          testId={"firstName"}
        />
        <FormInput
          label="Email"
          placeholder="Enter email"
          name="email"
          value={customerData.email}
          onChange={(e) => onChange(e, "email")}
          valid={formErrors.email.isValid}
          errorMsg={formErrors.email.errorMsg}
          testId={"email"}
        />
        <div className={classes.formActions}>
          <Button name="Continue" testId="continue" onClick={onContinue} />
        </div>
      </form>
      <div className={classes.recipeDetails}>
        <label className={classes.pageTitle}>{"Selected Recipes"}</label>
        <ul className={classes.recipeList}>
          {selectedRecipesList.map((recipe, key) => (
            <li key={`recipeKey_${key}`}>
              <label className={classes.recipeTitle}>
                {`${key + 1}. ${recipe.title}`}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
