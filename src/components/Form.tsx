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
  isSubmitting?: boolean;
};

export function Form<T extends z.ZodTypeAny>({
  fields,
  schema,
  onSubmit,
  submitLabel = "Submit",
  isSubmitting = false,
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
        const commonProps = { disabled: isSubmitting };

        if (field.type === "checkbox") {
          return (
            <div
              key={field.name}
              className="form-control w-full max-w-96 mx-auto"
            >
              <label
                className={`label flex gap-2 cursor-pointer justify-start ${
                  isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="checkbox h-5 w-5"
                  {...register(field.name as any)}
                  {...commonProps}
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
          <div
            key={field.name}
            className={`w-full max-w-96 mx-auto space-y-1 ${
              isSubmitting ? "opacity-60" : ""
            }`}
          >
            <label className="input input-bordered flex items-center gap-2">
              {field.icon}
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name as any)}
                className="grow"
                {...commonProps}
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
        className="btn btn-primary bg-accent block w-full border-0 max-w-96 mx-auto flex justify-center items-center gap-2"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  );
}
