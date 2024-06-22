"use server";

import { config } from "@/utils/config";
import { getYupErrors } from "@/utils/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

// Define the validation schema
const FormSchema = Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().required("Image is required"),
  price: Yup.number().typeError("Invalid number").required("Price is required"),
  category: Yup.string().required("Category is required"),
});

const CreateSchema = FormSchema.omit(["id"]);
export const createProductAction = async (prevState, formData) => {
  const fields = convertFormDataToJson(formData);

  try {
    CreateSchema.validateSync(fields, { abortEarly: false });

    const resp = await fetch(`${config.apiURL}/products`, {
      method: "post",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) {
      const data = await resp.json();

      throw new Error(data.message);
    }
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getYupErrors(err.inner);
    }

    return {
      message: "Something went wrong",
      errors: {
        common: err.message,
      },
    };
  }

  revalidatePath("/products");
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProductAction = async (prevstate, formData) => {
  const fields = convertFormDataToJson(formData);

  try {
    FormSchema.validateSync(fields, { abortEarly: false });

    const resp = await fetch(`${config.apiURL}/peoducts/${fields.id}`, {
      method: "put",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!resp.ok){
        const data = await resp.json()
        throw new Error(data.message)
    }
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
        return getYupErrors(error.inner);
  }
  return {
    message: "Something went wrong",
    errors: {
        common: error.message,
        },
  }

};
}