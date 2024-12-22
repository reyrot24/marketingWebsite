"use client";

import React from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  logo: ImageProps;
  avatar: ImageProps;
  name: string;
  companyName: string;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonials = (props: Testimonial7Props) => {
  const { testimonials, description } = {
    ...Testimonial7Defaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="testimonials"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-darkerBrown"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <h1 className="text-softerBrown mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What My{" "}
            <span className="gold-text1 underline decoration-softBrown">
              Clients
            </span>{" "}
            Say
          </h1>
          <p className="md:text-md ">{description}</p>
        </div>
        {/* for all available options: https://www.embla-carousel.com/api/options/ */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="overflow-hidden"
        >
          <div className="relative">
            <CarouselContent className="ml-0 md:mx-3">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-0 md:basis-full md:px-16"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="mt-8 hidden md:flex md:size-14 animate-bg text-white border-none" />
            <CarouselNext className="mt-8 hidden md:flex md:size-14 animate-bg text-white border-none" />
          </div>
          <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={clsx(
                  "relative mx-[3px] inline-block size-2 rounded-full",
                  {
                    "bg-softerBrown": current === index + 1,
                    "bg-brown": current !== index + 1,
                  }
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="container max-w-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src={testimonial.logo.src}
          alt={testimonial.logo.alt}
          className="max-h-14 w-full"
        />
        <blockquote className="my-6 text-xl font-bold md:my-8 md:text-2xl">
          {testimonial.quote}
        </blockquote>
        <div className="flex flex-col items-center justify-center">
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            className="mb-4 size-16 min-h-16 min-w-16 rounded-full object-cover"
          />
          <div className="flex flex-col items-center justify-center ">
            <p className="font-semibold text-yellow">{testimonial.name}</p>
            <p>
              <span>{testimonial.companyName}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonial7Defaults: Testimonial7Props = {
  description:
    "I’m proud to have helped businesses and individuals achieve their digital goals. Here’s what some of my clients have to say about their experience working with me:",
  testimonials: [
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 1",
      },
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      companyName: "Company name",
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 2",
      },
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",

      companyName: "Company name",
    },
  ],
};
