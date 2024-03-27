// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: { Fraunces: [700, 900], Barlow: [600] },
  },
  tailwindcss: {
    editorSupport: {
      generateConfig: true,
    },
    config: {
      theme: {
        extend: {
          colors: {
            softred: "#fe7867",
            bodygray: "#808397",
            bodygreen: "#24554A",
            bodymarine: "#052C3B",
            headingblack: "#24303E",
            footerblue: "#90D4C6",
            footergreen: "#458D7E",
            buttonyellow: "#FBD600",
          },
        },

        fontFamily: {
          heading: ["Fraunces"],
          body: ["Barlow"],
        },

        fontSize: {
          base: [
            "18px",
            {
              lineHeight: "30px",
              letterSpacing: "-0.13px",
              fontWeight: "600",
            },
          ],
          sm: [
            "15px",
            {
              lineHeight: "15px",
              letterSpacing: "1px",
            },
          ],
          xs: [
            "14px",
            {
              lineHeight: "25px",
              letterSpacing: "-0.1px",
            },
          ],
          md: [
            "32px",
            {
              letterSpacing: "0.23px",
            },
          ],
          lg: [
            "28px",
            {
              letterSpacing: "0.2px",
            },
          ],
          xl: [
            "40px",
            {
              letterSpacing: "6.25px",
            },
          ],
          xxl: [
            "56px",
            {
              letterSpacing: "8.75px",
            },
          ],
        },
      },
    },
  },
});
