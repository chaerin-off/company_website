import React from "react";
import HeroImage from "../../assets/Image4.avif";

const Hero = () => {
  return (
    <div className="relative min-h-[110vh] bg-gradient-to-b from-gray-50 to-white pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 flex justify-center">
        {/* flex 레이아웃을 선언하면 자식 요소들을 세로/가로로 배치할 수 있음. ->
        작은 화면에서는 flex-col이 적용되어 세로로 배치가 됨
        큰 화면에서는 flex-row가 적용되어 가로로 배치가 됨*/}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/*flex 레이아웃의 첫번째 div 태그: 회사 타이틀 문구*/}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              인테리어 전문가와 함께
              <span className="block text-green-600 mt-2 lg:mt-6">
                미래를 만들어갑니다.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 text-semibold mb-8 max-w-2xl mx-auto">
              감각있고 매력적인 가구 구매부터 인테리어까지, 전문가들이
              함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                상담 신청하기
              </button>
              <button className="px-8 py-4 bg-white text-green-600 rounded-lg border-2 border-green-600 hover:bg-blue-50 transition-colors duration-300 text-lg font-semibold">
                더 알아보기
              </button>
            </div>
          </div>
          {/*flex 레이아웃의 두번째 div 태그: 회사 타이틀 이미지
          부모 태그가 flex-1로 설정되어 있어 width는 꽉 채우지만 왼쪽으로 정렬됨. <img> 부모 div에 flex 가운데 정렬을 따로 걸어줘야 함*/}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none flex justify-center">
            <div className="relative">
              <img
                src={HeroImage}
                className="relative rounded-2xl shadow-2xl w-[500px] object-cover transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto my-auto">
          {[
            { number: "1,200+", label: "설치 완료" },
            { number: "98%", label: "고객 만족도" },
            { number: "15년+", label: "업계 경력" },
            { number: "24/7", label: "기술 지원" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {stat.number}
              </div>
              <div className="text-gray-900">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
