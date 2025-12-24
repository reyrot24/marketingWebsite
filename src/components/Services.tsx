import BentoServices from "./BentoServices";

export const Services = () => {
  return (
    <section
      id="services"
      className="bg-black1 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
            Servizi su Misura per la Tua Crescita Digitale
          </h1>
          Ogni progetto è unico. Ecco come posso aiutarti a crescere online:
        </div>
        <BentoServices />
      </div>
    </section>
  );
};
