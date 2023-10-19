import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 break-keep">
          전 세계의 여행장소들로
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] break-keep">
          회사생활 하며 자연의 아름다움을 보지 못하는 여러분과 동반하고싶어요.
          Hilink 앱으로 전 세계 여행을 떠나자구요!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198,000+
            <span className="regular-16 lg:regular-20 ml-1">사용자 리뷰</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="앱 다운로드" variant="btn_green" />
          <Button
            type="button"
            title="우리는 어떤 일을 하나요?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">장소</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">등산로</p>
              <p className="bold-20 text-white">279 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">고도</p>
              <p className="bold-20 text-white">2,040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
