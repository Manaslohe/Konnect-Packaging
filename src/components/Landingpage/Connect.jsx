import * as React from "react";
import "@fontsource/krona-one";

function Connect() {
  return (
    <div className="flex overflow-hidden flex-col py-12 pl-9 bg-white max-md:pl-5 font-['Krona_One']">
      <div className="self-center text-5xl text-black max-md:max-w-full max-md:text-4xl">
        Connect with us
      </div>
      <div className="flex flex-col bg-gradient-to-r from-[#E7C375] to-[#fffffe] items-start pt-5 pr-20 pb-20 pl-9 mt-20 w-full rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
          Join our social‑media <br />
          community
        </div>
        <div className="mt-3 text-lg pt-4 font-normal text-black w-[710px] max-md:max-w-full">
          Join us on social media for the latest stories, innovations, and
          exclusive updates. Let's grow and make an impact—together.
        </div>
        <div className="flex flex-wrap gap-5 justify-between self-center mt-16 w-full text-base text-white max-w-[1155px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-1.5 px-6 py-1.5 whitespace-nowrap bg-black rounded-3xl max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fb2d4240c0f4a2c094cb434ee8ef95f8103346f?placeholderIfAbsent=true"
              className="object-contain shrink-0 aspect-square w-[30px]"
            />
            <div className="my-auto basis-auto">WhatsApp</div>
          </div>
          <div className="px-14 py-3 bg-black rounded-3xl max-md:px-5">
            {" "}
            Facebook
          </div>
          <div className="flex gap-1 px-7 py-1.5 whitespace-nowrap bg-black rounded-3xl max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d33f5c4bd9d7d718245b3213c591cad6d514cc4?placeholderIfAbsent=true"
              className="object-contain shrink-0 w-7 aspect-square"
            />
            <div className="my-auto basis-auto">Instagram</div>
          </div>
          <div className="flex px-9 py-2 bg-black rounded-3xl max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/182ac30bbaec62d8dfda5fee0db8f8cc63789da7?placeholderIfAbsent=true"
              className="object-contain shrink-0 aspect-square w-[27px]"
            />
            <div className="my-auto"> LinkedIn</div>
          </div>
          <div className="flex gap-4 px-9 py-2.5 whitespace-nowrap bg-black rounded-3xl max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3685217efd58930915d23d37430138b4629e3f22?placeholderIfAbsent=true"
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
