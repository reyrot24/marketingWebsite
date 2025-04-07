import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { images } from "@/constants/images";

interface IFormInput {
  user_name: string;
  user_email: string;
  message: string;
}

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );
  const { t } = useTranslation();

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    setLoading(true);

    const templateParams = {
      ...data,
    };

    if (acceptTerms) {
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        .then(() => {
          reset();
          setLoading(false);
          alert(t("contact.alert"));
        });
    } else {
      setLoading(false);
      alert("Accept the Privacy!");
    }
  };

  return (
    <section
      id="contact"
      className=" px-[5%] py-16 md:py-24 lg:py-28 bg-darkerBrown"
    >
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <h2 className="text-softerBrown rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {t("contact.title")}{" "}
            <span className="gold-text1 underline decoration-softBrown">
              {t("contact.goldText")}
            </span>
          </h2>
          <p className="md:text-md">{t("contact.subtitle")}</p>
        </div>
        <div className="md:grid md:grid-cols-2 gap-12 ">
          <form
            className="mx-auto grid w-full max-w-md grid-cols-1 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                {t("contact.form.name")}
              </Label>
              <Input
                placeholder="John Doe"
                type="text"
                id="name"
                {...register("user_name", { required: true })}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                {t("contact.form.email")}
              </Label>
              <Input
                placeholder="johndoe@gmail.com"
                type="email"
                id="email"
                {...register("user_email", { required: true })}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                {t("contact.form.message")}
              </Label>
              <Textarea
                id="message"
                placeholder={t("contact.form.messagePlaceholder")}
                className="min-h-[11.25rem] overflow-auto"
                {...register("message", { required: true })}
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={setAcceptTerms}
              />
              <Label htmlFor="terms" className="cursor-pointer">
                {t("contact.form.privacy")}{" "}
                <a
                  className="text-yellow underline"
                  href="https://www.iubenda.com/privacy-policy/56148233"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
              </Label>
            </div>
            <div className="text-center">
              <Button disabled={loading} type="submit">
                {t("contact.form.button")}
              </Button>
            </div>
          </form>
          <div className="flex flex-col items-center gap-6 md:m-0 m-10">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/3204016602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt={images.whatsapp.alt} src={images.whatsapp.src} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
