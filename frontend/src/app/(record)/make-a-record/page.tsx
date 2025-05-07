import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";

export default function MakeRecord() {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full md:flex hidden justify-center">
        <span className="w-3xl text-center text-neutral-500 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </span>
      </div>

      <div className="flex md:flex-row flex-col-reverse md:gap-30 gap-10 justify-center">
        <div className="flex flex-col gap-8 w-full max-md:px-6">
          <Input
            placeholder="Who are you"
            label="NAME"
            type="text"
            className="w-full"
            labelIcon={
              <Icon
                icon="material-symbols:person-rounded"
                className="md:size-6 size-5 text-rose-600"
              />
            }
          />

          <div className="flex md:gap-10 gap-6 w-full">
            <Input
              placeholder="Your age"
              label="AGE"
              type="number"
              className="w-full"
              labelIcon={
                <span className="bg-rose-600 md:size-5 size-4 rounded-sm flex justify-center items-center">
                  <Icon
                    icon="octicon:number-16"
                    className="md:size-4 size-3 text-white"
                  />
                </span>
              }
            />
            <Input
              placeholder="What do you do"
              label="OCCUPATION"
              type="text"
              className="w-full"
              labelIcon={
                <Icon
                  icon="basil:bag-solid"
                  className="md:size-6 size-5 text-rose-600"
                />
              }
            />
          </div>

          <div className="flex md:gap-10 gap-6 w-full">
            <Input
              placeholder="9876543210"
              label="CONTACT NO."
              type="phoneNumber"
              className="w-full"
              labelIcon={
                <Icon
                  icon="ic:round-phone"
                  className="md:size-6 size-5 text-rose-600"
                />
              }
            />
            <Input
              placeholder="Your email id"
              label="EMAIL"
              className="w-full"
              labelIcon={
                <Icon
                  icon="material-symbols:mail-rounded"
                  className="md:size-6 size-5 text-rose-600"
                />
              }
            />
          </div>

          <div className="flex md:gap-10 gap-6 w-full">
            <Input
              placeholder="Pincode"
              label="PINCODE"
              type="number"
              className="w-full"
              labelIcon={
                <Icon
                  icon="iconamoon:location-fill"
                  className="md:size-6 size-5 text-rose-600"
                />
              }
            />
            <Input
              placeholder="Where do you live"
              label="LOCATION"
              type="text"
              className="w-full"
              labelIcon={
                <Icon
                  icon="weui:location-filled"
                  className="md:size-6 size-5 text-rose-600"
                />
              }
            />
          </div>
        </div>
        <div className="md:h-[28rem] h-72 p-10 w-full flex justify-center items-center md:rounded-xl bg-[url('../assets/images/background-square.webp')]">
          <span className="text-white text-center md:text-5xl text-3xl font-black font-['Montserrat'] md:leading-[72px] leading-[50px] tracking-widest">
            MAKE A NEW RECORD
          </span>
        </div>
      </div>
      <div className="flex gap-30 justify-center max-md:mt-8">
        <Button className="md:w-md max-md:px-12">Submit Details</Button>
      </div>
    </div>
  );
}
