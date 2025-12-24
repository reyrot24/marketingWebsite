import { images } from "@/constants/images";

export const Contact = () => {
  return (
    <section
      id="contact"
      className=" px-[5%] py-16 md:py-24 lg:py-28 bg-darkerBrown relative"
    >
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
            Parliamo del Tuo Progetto
          </h1>
          <p className="md:text-md">
            Hai un'idea o un progetto da sviluppare? Sono qui per aiutarti a
            trasformarlo in realtà. Mandami un'email o clicca il pulsante per
            contattarmi su WhatsApp.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 gap-4 relative">
          <a href="mailto:your.email@example.com?subject=Hello&body=I%20have%20a%20question">
            <div className="flex flex-col items-center border border-softerBrown py-2 rounded-xl">
              <h1 className="font-bold text-xl text-softerBrown">Email:</h1>
              <h1 className="italic">vasileandreirotaru@gmail.com</h1>
            </div>
          </a>
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
