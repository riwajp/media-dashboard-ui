"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";

export type Field = {
  name: string;
  label?: React.ReactNode;
  type: "text" | "email" | "password" | "checkbox";
  placeholder?: string;
  icon?: React.ReactNode;
};

type FormProps<T extends z.ZodTypeAny> = {
  fields: Field[];
  schema: T;
  onSubmit: SubmitHandler<z.infer<T>>;
  submitLabel?: string;
};

export function Form<T extends z.ZodTypeAny>({
  fields,
  schema,
  onSubmit,
  submitLabel = "Submit",
}: FormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-auto">
      {fields.map((field) => {
        const error = errors[field.name as keyof z.infer<T>];

        if (field.type === "checkbox") {
          return (
            <div
              key={field.name}
              className="form-control w-full max-w-96 mx-auto"
            >
              <label className="label flex gap-2 cursor-pointer justify-start">
                <input
                  type="checkbox"
                  className="checkbox h-5 w-5"
                  {...register(field.name as any)}
                />
                <span className="label-text text-sm">{field?.label ?? ""}</span>
              </label>
              {error && (
                <p className="text-error text-xs mt-1">
                  {error.message as string}
                </p>
              )}
            </div>
          );
        }

        return (
          <div key={field.name} className="w-full max-w-96 mx-auto space-y-1">
            <label className="input input-bordered flex items-center gap-2">
              {field.icon}
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name as any)}
                className="grow"
              />
            </label>
            {error && (
              <p className="text-error text-xs mt-1 ml-2">
                {error.message as string}
              </p>
            )}
          </div>
        );
      })}

      <button
        className="btn btn-primary bg-accent block w-full border-0 max-w-96 mx-auto"
        type="submit"
      >
        {submitLabel}
      </button>
    </form>
  );
}
