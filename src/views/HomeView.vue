<template>
  <section class="text-2xl ">
    <div
      class=" text-center
        pl-4
        pb-5
        flex flex-col
        items-center justify-center
        md:w-auto
        
        md:flex md:justify-center md:items-center md:flex-col md:pb-[70px]
        lg:grid
        lg:items-center
        lg:grid-cols-2
        lg:gap-[70px]
        lg:pl-[125px]
        lg:pr-[0]
        lg:pt-[60px]
        lg:pb-[40px]
        overflow-hidden
      "
    >
      <img
        class=" 
          bg-no-repeat bg-center
          h-[329px]
          min-w-[550px]
          md:w-[500px] md:min-h-[328px]
          text-left
          overflow-hidden
          lg:min-w-[733px]
          lg:overflow-hidden
          lg:h-[432px]
          lg:col-start-2
          lg:col-end-3
          lg:row-start-1
          lg:row-end-2
        "
        src="..\src\assets\images\illustration-working.svg"
        alt="bg"
      />
      <div
        class="
          details
          px-4
          text-center
          py-3
          pb-[15px]
          block
          lg:text-left lg:p-0
        "
      >
        <h1
          class="
            text-5xl
            font-[600]
            lg:text-[68.8px]
            md:text-[40px] md:mb-[15px]
          "
        >
          More than just shorter links
        </h1>
        <p
          class="
            text-custom-gray
            py-4
            text-[1.2rem]
            md:p-0
            md:mb-[25px]
            lg:text-[20.8px] lg:pt-[15px] lg:pb-[25px]
          "
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          class="
            bg-[#2ACFCF]
            text-[19.2px] font-semibold
            text-white
            py-[15px]
            px-[45px]
            radius
            rounded-[34px]
            my-5
            lg:my-5
            hover:bg-[#A3E6E6]
          "
        >
          Get Started
        </button>
      </div>
    </div>
    
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
