import { z } from "zod";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});