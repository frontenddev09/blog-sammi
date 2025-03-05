// "use client";
// import { contactSchema } from "@/lib/validation";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { Textarea } from "../ui/textarea";
// import { useState } from "react";
// import { toast } from "sonner";
// import { Send } from "lucide-react";

// const ContactCard = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<z.infer<typeof contactSchema>>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof contactSchema>) {
//     setIsLoading(true);
//     const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID;
//     const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
//     const promise = fetch(`https://telegram/bot${telegramBotId}/sendMessage`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "cache-control": "no-cache",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: `Name: ${values.name};
//               Email: ${values.email};
//               Message: ${values.message};`,
//       }),
//     })
//       .then(() => form.reset())
//       .finally(() => setIsLoading(false))
//       .catch((e) => console.log(e));

//     toast.promise(promise, {
//       loading: "Loading...",
//       error: "Something went wrong!",
//       success: "Successfully sent!",
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
//         <FormField
//           name="message"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Textarea
//                   disabled={isLoading}
//                   {...field}
//                   className="resize-none h-32"
//                   placeholder="Ask question or just say Hi"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           name="name"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input
//                   disabled={isLoading}
//                   placeholder="Enter Name"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           name="email"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input
//                   disabled={isLoading}
//                   placeholder="Email address"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button
//           className="w-fit"
//           size={"lg"}
//           type="submit"
//           disabled={isLoading}
//         >
//           <span>Send</span>
//           <Send className="w-4 h-4 ml-2" />
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default ContactCard;
