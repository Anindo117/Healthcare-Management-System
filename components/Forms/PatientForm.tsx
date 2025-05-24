"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import CustomFormField from "../CustomFormField";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function PatientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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

          <Button type="submit" onClick={() => onSubmit}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
