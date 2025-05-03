import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";

export default function BreakRecord() {
  return (
    <div className="flex flex-col gap-11">
      <div className="w-full flex justify-center">
        <span className="w-3xl text-center text-neutral-500 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </span>
      </div>

      <div className="flex gap-30 justify-center">
        <div className="flex flex-col gap-8 w-full">
          <Input
            placeholder="Who are you"
            label="NAME"
            type="text"
            labelIcon={
              <Icon
                icon="material-symbols:person-rounded"
                className="size-6 text-rose-600"
              />
            }
          />

          <div className="flex gap-10 w-full">
            <Input
              placeholder="Your age"
              label="AGE"
              type="number"
              labelIcon={
                <span className="bg-rose-600 size-6 rounded-sm flex justify-center items-center">
                  <Icon
                    icon="octicon:number-16"
                    className="size-4 text-white"
                  />
                </span>
              }
            />
            <Input
              placeholder="What do you do"
              label="OCCUPATION"
              type="text"
              labelIcon={
                <Icon icon="basil:bag-solid" className="size-6 text-rose-600" />
              }
            />
          </div>

          <div className="flex gap-10 w-full">
            <Input
              placeholder="9876543210"
              label="CONTACT NO."
              type="phoneNumber"
              labelIcon={
                <Icon icon="ic:round-phone" className="size-6 text-rose-600" />
              }
            />
            <Input
              placeholder="Your email id"
              label="EMAIL"
              labelIcon={
                <Icon
                  icon="material-symbols:mail-rounded"
                  className="size-6 text-rose-600"
                />
              }
            />
          </div>

          <div className="flex gap-10 w-full">
            <Input
              placeholder="Pincode"
              label="PINCODE"
              type="number"
              labelIcon={
                <Icon
                  icon="iconamoon:location-fill"
                  className="size-6 text-rose-600"
                />
              }
            />
            <Input
              placeholder="Where do you live"
              label="LOCATION"
              type="text"
              labelIcon={
                <Icon
                  icon="weui:location-filled"
                  className="size-6 text-rose-600"
                />
              }
            />
          </div>
        </div>
        <div className="h-[28rem] w-full flex justify-center items-center rounded-xl bg-[url('../assets/images/background-square.webp')]">
          <span className="text-white text-center text-5xl font-black font-['Montserrat'] leading-[72px] tracking-widest">
            BREAK AN EXISTING RECORD
          </span>
        </div>
      </div>
      <div className="flex gap-30 justify-center">
        <Button className="w-md">Submit Details</Button>
      </div>
    </div>
  );
}
