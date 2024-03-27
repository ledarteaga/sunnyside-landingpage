<template>
  <header
    class="flex justify-between bg-transparent absolute top-7 w-full px-7 items-center"
  >
    <img src="/images/logo.svg" alt="Company Logo" />

    <!-- Mobile Menu Icon -->
    <img
      src="/images/icon-hamburger.svg"
      alt="Mobile Menu Icon"
      class="inline sm:hidden"
      @click="isMenuOpened = !isMenuOpened"
    />

    <!-- Desktop Menu Icon -->
    <div class="hidden sm:flex items-center gap-8">
      <a href="#" class="text-base text-white font-body">About</a>
      <a href="#" class="text-base text-white font-body">Services</a>
      <a href="#" class="text-base text-white font-body">Projects</a>

      <button
        class="bg-white p-5 font-heading text-sm text-headingblack rounded-full hover:bg-opacity-50 hover:text-white transition-all"
        type="button"
      >
        CONTACT
      </button>
    </div>
  </header>

  <main>
    <div
      class="hero-bg h-[538px] sm:h-screen flex flex-col justify-center sm:gap-8"
    >
      <h1 class="text-center font-heading text-white text-xl sm:text-xxl">
        WE ARE CREATIVES
      </h1>

      <img
        src="/images/icon-arrow-down.svg"
        class="mx-auto h-[110px]"
        alt="Arrow down Icon"
      />
    </div>
  </main>

  <section
    v-if="isMenuOpened"
    name="mobile-menu"
    class="w-10/12 h-[350px] bg-white flex flex-col text-center gap-8 justify-center absolute top-28 inset-x-0 mx-auto after:absolute after:-top-8 after:bg-white after:w-8 after:h-8 after:right-0 arrow-clip"
  >
    <p class="font-body text-bodygray text-base">About</p>
    <p class="font-body text-bodygray text-base">Services</p>
    <p class="font-body text-bodygray text-base">Project</p>

    <button
      class="bg-buttonyellow p-5 font-heading text-sm text-headingblack rounded-full w-2/4 mx-auto"
      type="button"
    >
      CONTACT
    </button>
  </section>

  <section name="highlights">
    <div class="flex flex-col sm:flex-row">
      <div class="transform-bg h-[312px] sm:h-[600px] sm:w-1/2"></div>
      <div
        class="transform-content flex-col flex justify-center gap-5 py-16 sm:w-1/2 sm:px-36 items-center sm:items-start"
      >
        <h2
          class="font-heading text-bodymarine text-md sm:text-xl sm:tracking-tight text-center sm:text-start"
        >
          Transform your content
        </h2>
        <p
          class="font-body text-base text-bodygray text-center sm:text-start px-5 sm:px-0"
        >
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>

        <div
          class="relative w-36 after:w-4/5 after:h-[8px] after:transition-all after:bg-[#FAD400] after:bg-opacity-50 after:hover:bg-opacity-100 after:absolute after:bottom-0 after:inset-x-0 after:z-0 after:rounded-full"
        >
          <a
            href="#"
            class="text-sm uppercase font-heading text-black text-center relative z-10"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row-reverse">
      <div class="standout-bg h-[312px] sm:h-[600px] sm:w-1/2"></div>
      <div
        class="standout-content flex-col flex justify-center gap-5 py-16 sm:w-1/2 sm:px-36 items-center sm:items-start"
      >
        <h2
          class="font-heading text-bodymarine text-md sm:text-xl tracking-tighter text-center sm:text-start sm:tracking-tight"
        >
          Stand out to the right audience
        </h2>
        <p
          class="font-body text-base text-bodygray text-center px-5 sm:px-0 sm:text-start"
        >
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>

        <div
          class="relative w-36 after:w-4/5 after:h-[8px] after:transition-all after:bg-[#FE7766] after:bg-opacity-50 after:hover:bg-opacity-100 after:absolute after:bottom-0 after:inset-x-0 after:z-0 after:rounded-full"
        >
          <a
            href="#"
            class="text-sm uppercase font-heading text-black text-center relative z-10"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>

  <section name="services" class="sm:flex">
    <div class="graphic-design-bg h-[600px] flex justify-end flex-col sm:w-1/2">
      <div class="flex flex-col text-center mb-9">
        <h2 class="font-heading text-bodygreen text-lg">Graphic Design</h2>
        <p class="font-body text-bodygreen text-base my-5 px-5 sm:px-36">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
    </div>

    <div class="photography-bg h-[600px] flex justify-end flex-col sm:w-1/2">
      <div class="flex flex-col text-center mb-9">
        <h2 class="font-heading text-bodymarine text-lg">Photography</h2>
        <p class="font-body text-bodymarine text-base my-5 px-5 sm:px-32">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  </section>

  <section name="testimonials" class="py-20 sm:py-36">
    <p
      class="text-sm sm:text-base text-[#A7AAAD] font-heading my-12 uppercase text-center"
    >
      Client testimonials
    </p>

    <div class="flex flex-col sm:flex-row sm:mx-20 gap-16 pb-5">
      <div class="flex flex-col justify-center items-center text-center">
        <img
          src="/images/image-emily.jpg"
          alt="Client Avatar 1"
          class="rounded-full h-[72px] w-[72px]"
        />

        <p class="text-bodygray text-base font-body px-5 my-9">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>

        <h3 class="font-heading text-headingblack text-base mb-2">Emily R.</h3>

        <p class="text-bodygray text-sm font-body">Marketing Director</p>
      </div>

      <div class="flex flex-col justify-center items-center text-center">
        <img
          src="/images/image-thomas.jpg"
          alt="Client Avatar 1"
          class="rounded-full h-[72px] w-[72px]"
        />

        <p class="text-bodygray text-base font-body px-5 my-9">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </p>

        <h3 class="font-heading text-headingblack text-base mb-2">Thomas S.</h3>

        <p class="text-bodygray text-sm font-body">Chief Operating Officer</p>
      </div>

      <div class="flex flex-col justify-center items-center text-center">
        <img
          src="/images/image-jennie.jpg"
          alt="Client Avatar 1"
          class="rounded-full h-[72px] w-[72px]"
        />

        <p class="text-bodygray text-base font-body px-5 my-9">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!.
        </p>

        <h3 class="font-heading text-headingblack text-base mb-2">Jennie F.</h3>

        <p class="text-bodygray text-sm font-body">Bussiness Owner</p>
      </div>
    </div>
  </section>

  <section name="gallery">
    <div class="grid grid-cols-2 sm:grid-cols-4 sm:gap-0">
      <div class="col-span-1 bg-gallery-milkbottles"></div>
      <div class="col-span-1 bg-gallery-orange"></div>
      <div class="col-span-1 bg-gallery-cone"></div>
      <div class="col-span-1 bg-gallery-sugar-cubes"></div>
    </div>
  </section>

  <footer class="bg-footerblue h-[350px]">
    <figure class="pt-14">
      <img src="/images/logo-green.svg" class="mx-auto block" />
    </figure>

    <div class="flex justify-center gap-8 mb-16 mt-10">
      <a
        href="#"
        class="font-body text-base text-footergreen sm:active:text-white"
        >About</a
      >
      <a
        href="#"
        class="font-body text-base text-footergreen sm:active:text-white"
        >Services</a
      >
      <a
        href="#"
        class="font-body text-base text-footergreen sm:active:text-white"
        >Project</a
      >
    </div>

    <div class="flex justify-center gap-5">
      <img src="/images/icon-facebook.svg" alt="Facebook Icon" />
      <img src="/images/icon-instagram.svg" alt="Instagram Icon" />
      <img src="/images/icon-twitter.svg" alt="Twitter Icon" />
      <img src="/images/icon-pinterest.svg" alt="Pinterest Icon" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpened = ref(false);
</script>

<style>
.hero-bg {
  background-image: url(images/mobile/image-header.jpg);
  background-position: top;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-header.jpg);
  }
}

.transform-bg {
  background-image: url(images/mobile/image-transform.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-transform.jpg);
  }
}
.standout-bg {
  background-image: url(images/mobile/image-stand-out.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-stand-out.jpg);
  }
}

.graphic-design-bg {
  background-image: url(images/mobile/image-graphic-design.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-graphic-design.jpg);
  }
}

.photography-bg {
  background-image: url(images/mobile/image-photography.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-photography.jpg);
  }
}

.bg-gallery-milkbottles {
  background-image: url(images/mobile/image-gallery-milkbottles.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-gallery-milkbottles.jpg);
  }
}

.bg-gallery-orange {
  background-image: url(images/mobile/image-gallery-orange.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-gallery-orange.jpg);
  }
}

.bg-gallery-sugar-cubes {
  background-image: url(images/mobile/image-gallery-sugar-cubes.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-gallery-sugarcubes.jpg);
  }
}

.bg-gallery-cone {
  background-image: url(images/mobile/image-gallery-cone.jpg);
  background-position: center;
  background-size: cover;

  @media (min-width: 1200px) {
    background-image: url(images/desktop/image-gallery-cone.jpg);
  }
}

.bg-gallery-cones,
.bg-gallery-milkbottles,
.bg-gallery-orange,
.bg-gallery-sugar-cubes {
  height: 188px;

  @media (min-width: 1200px) {
    height: 488px;
  }
}

.arrow-clip:after {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
</style>
