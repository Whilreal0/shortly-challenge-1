<template>
  <section class="bg-custom-gray-2 pb-[80px]">
    <div
      class="
        p-5
        w-screen
        h-[198px]
        bg-custom-gray-2
        relative
        lg:flex lg:flex-col lg:justify-center lg:items-center
      "
    >
      <div
        class="bg-white h-[99px] absolute left-0 top-0 z-0 w-full"
        id="top"
      ></div>

      <div
        class="
          relative
          shorten-link
          flex flex-col
          gap-3
          p-5
          min-h-[158px]
          bg-Dark-Violet bg-shorten-mobile bg-center bg-no-repeat
          rounded-[10px]
          z-10
          lg:flex-row
          lg:min-h-[153px]
          lg:w-[757px]
          lg:min-w-[757px]
          lg:p-[50px]
          lg:gap-[15px]
        "
      >
        <input
          class="
            py-3
            px-5
            border-2
            rounded-[5px]
            w-full
            lg:py-[10px] lg:px-[12px]
          "
          type="text"
          placeholder="Shorten a link here..."
        />
        <button
          class="
            py-3
            px-[10px]
            font-bold
            text-white
            bg-[#2ACFCF]
            lg:min-w-[128.41px]
            rounded-[5px]
            hover:bg-[#A3E6E6]
          "
        >
          Shorten It!
        </button>
      </div>
    </div>
    <div class="px-5 text-center lg:px-[125px]  xl:flex xl:flex-col xl:justify-center xl:items-center">
      <div class="pt-[100px] mb-10 xl:w-[493px] ">
        <h1 class="text-[25px] font-bold pb-3 xl:text-[40px]">Advance Statistics</h1>
        <p class="mb-10 w-auto xl:text-[16px] xl:text-[#9E9AA7]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <!-- lg style -->
      <div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:text-left" id="lg-style">
        <div
          class="
            mt-[6rem]
            info-item
            relative
            flex flex-col
            justify-center
            items-center
            rounded-[5px]
          "
        >
          <div
            class="
              icon
              rounded-[50%]
              bg-Dark-Violet
              absolute
              top-[-40px]
              w-[90px]
              aspect-square
              mx-auto
              flex
              justify-center
              items-center
            "
          >
            <img
              class="w-[40px] text-center"
              src="../assets/images/icon-brand-recognition.svg"
              alt=""
            />
          </div>
          <div
            class="
              bg-white
              min-h-[]
              pt-[80px]
              px-[25px]
              pb-[40px]
              rounded-[5px]
            "
          >
            <h2 class="text-[25px] font-bold pb-3 lg:text-[22.4px]">
              Brand Recognition
            </h2>
            <p class="lg:text-[14.4px]">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>

        <!-- 2nd -->
        <div
          class="
            mt-[6rem]
            info-item
            relative
            flex flex-col
            justify-center
            items-center
          "
        >
          <div
            class="
              icon
              rounded-[50%]
              bg-Dark-Violet
              absolute
              top-[-40px]
              w-[90px]
              aspect-square
              mx-auto
              flex
              justify-center
              items-center
            "
          >
            <img
              class="w-[40px] text-center"
              src="../assets/images/icon-brand-recognition.svg"
              alt=""
            />
          </div>
          <div
            class="
              bg-white
              min-h-[]
              pt-[80px]
              px-[25px]
              pb-[40px]
              rounded-[5px]
              lg:after:content-['']
              lg:after:absolute
              lg:after:w-[32px]
              lg:after:h-2
              lg:after:left-[-32px]
              lg:after:top-[150px]
              lg:after:bg-[#2ACFCF]
            "
          >
            <h2 class="text-[25px] font-bold pb-3 lg:text-[22.4px]">
              Detailed Records
            </h2>
            <p class="lg:text-[14.4px]">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <!-- 3rd -->
        <div
          class="
            mt-[6rem]
            info-item
            relative
            flex flex-col
            justify-center
            items-center
          "
        >
          <div
            class="
              icon
              rounded-[50%]
              bg-Dark-Violet
              absolute
              top-[-40px]
              w-[90px]
              aspect-square
              mx-auto
              flex
              justify-center
              items-center
            "
          >
            <img
              class="w-[40px] text-center"
              src="../assets/images/icon-brand-recognition.svg"
              alt=""
            />
          </div>
          <div
            class="
              bg-white
              min-h-[]
              pt-[80px]
              px-[25px]
              pb-[40px]
              rounded-[5px]
              
              lg:after:content-['']
              lg:after:absolute
              lg:after:w-[32px]
              lg:after:h-2
              lg:after:left-[-32px]
              lg:after:top-[150px]
              lg:after:bg-[#2ACFCF]
            "
          >
            <h2 class="text-[25px] font-bold pb-3 lg:text-[22.4px]">
              Fully Customizable
            </h2>
            <p class="lg:text-[14.4px]">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>