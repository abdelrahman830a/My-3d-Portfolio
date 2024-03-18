"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { infer, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import process from "process";
import { formSchema } from "@/lib/validations";
import { toast } from "@/components/ui/use-toast";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    toast({
      title: "Redirecting to email app...",
    });

    try {
      const { name, email, message } = values;
      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(message);

      // Generate the mailto link with predefined subject and body
      const mailtoLink = `mailto:abdelrahmanzaitoun9@gmail.com?subject=${subject}&body=${body}`;

      // Open the user's default email client with the pre-filled details
      window.location.href = mailtoLink;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="overflow-hidden bg-gray-400/5 py-8 md:px-16">
      <div className="flex flex-col items-center justify-center md:mx-5 lg:mx-40">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-slate-300">
          <h1 className="text-6xl font-bold leading-relaxed text-slate-300 md:leading-loose">
            Want to offer coffee?
          </h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Zaitoun"
                      {...field}
                      className="rounded-md border border-gray-200 border-opacity-40 bg-slate-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-slate-600 md:w-80"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="zaitoun@zaitoun.vercel.app"
                      {...field}
                      className="rounded-md border border-gray-200 border-opacity-40 bg-slate-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-slate-600 md:w-80"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="message..."
                      {...field}
                      className=" h-32 rounded-md border border-gray-200 border-opacity-40 bg-slate-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-slate-600 md:w-80"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              className="hover:textslate-800 w-60 rounded-md bg-slate-300 px-5 py-2 text-slate-900 transition duration-300 ease-in-out hover:bg-slate-400 hover:shadow-xl md:w-80"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Page;

export async function generateStaticParams() {
  return {
    slug: "contact",
  };
}
