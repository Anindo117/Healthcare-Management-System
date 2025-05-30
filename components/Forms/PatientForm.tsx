"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { userFormValidation } from "@/lib/validation";
import { useState } from "react";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { Form } from "../ui/form";

export enum FormFieldType {
  INPUT = "input",
  SELECT = "select",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  PHONE_NUMBER = "phoneNumber",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
}

export default function PatientForm() {
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof userFormValidation>) {
    setIsLoading(true);

    try {
      // const userData = {
      //   name: values.name,
      //   email: values.email,
      //   phone: values.phone,
      // };
      // const user = await createUser(userData);
      // if (user) router.push(`/?patients/${user.id}/register`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="md:max-w-[496px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <section className="mb-12 space-y-4">
            <h1 className="text-4xl font-bold">Hi there, ...</h1>
            <p className="text-sm text-neutral-400">
              Get Started with Appointments.
            </p>
          </section>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full Name"
            placeholder="Anindo Ahmed"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="hello@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_NUMBER}
            control={form.control}
            name="phone_number"
            label="Phone"
            placeholder="+880 123 456 7890"
          />

          <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
