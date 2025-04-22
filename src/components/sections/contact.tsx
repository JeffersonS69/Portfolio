import BubbleText from "../bubble_text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { OPTIONFORM } from "@/utils/constants";
import { FORMSCHEMA } from "@/utils/form-schame";
import { z } from "zod";
import useHandlerFrom from "@/hooks/handler-form";
import AnimationButtonForm from "../buttom/animation-button-form";

const Contact = () => {
  const { form, isLoading, onSubmit, status } = useHandlerFrom();

  return (
    <>
      <BubbleText
        text="Contácteme"
        style="text-5xl sm:text-6xl font-bold tracking-wide cursor-default"
      />
      <p className="mt-4 text-lg max-w-xl">
        ¿Te interesa trabajar conmigo o tienes alguna pregunta? ¡No dudes en
        escribirme!
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-8  bg-muted p-4 rounded-md shadow-md w-full max-w-xl mx-auto"
        >
          {OPTIONFORM.map((option) => (
            <FormField
              key={option.name}
              control={form.control}
              name={option.name as keyof z.infer<typeof FORMSCHEMA>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{option.title}</FormLabel>
                  <FormControl>
                    {option.name === "message" ? (
                      <Textarea placeholder={option.placeholder} {...field} />
                    ) : (
                      <Input placeholder={option.placeholder} {...field} />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <AnimationButtonForm isLoading={isLoading} status={status} />
        </form>
      </Form>
    </>
  );
};

export default Contact;
