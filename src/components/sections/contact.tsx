"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Button } from "../ui/button";
import { socialLinks } from "@/lib/consts";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().min(5).max(100).email(),
  message: z.string().min(10).max(1000),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const t = toast.loading("Sending message...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent successfully!", { id: t });
        form.reset();
      } else {
        const result = await res.json();
        toast.error(result.error || "Failed to send message.", { id: t });
      }
    } catch {
      toast.error("Failed to send message.", { id: t });
    }
  };

  return (
    <div id="contact">
      <h3 className="text-2xl font-semibold relative inline" id="contact-title">
        Contact Me
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Name</FormLabel>
                  <FormControl>
                    <input
                      className="w-full bg-white/5 border border-primary-text/20 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-text focus:border-transparent h-max"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Email</FormLabel>
                  <FormControl>
                    <input
                      className="w-full bg-white/5 border border-primary-text/20 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-text focus:border-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Message</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full bg-white/5 border border-primary-text/20 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-text focus:border-transparent"
                    rows={7}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-4">
            <Button type="submit" size="lg" variant="secondary">
              Submit
            </Button>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-secondary-text hover:text-primary-text transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </form>
      </Form>
    </div>
  );
};
