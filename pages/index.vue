<template>
  <div class="bg-gray-800 text-gray-200 min-h-screen">
    <main class="flex flex-col items-center justify-center py-16 px-4">
      <div class="w-32 h-32 mb-6">
        <img src="../assets/img/siput.png" alt="" class="rounded-full" />
      </div>
      <h2 class="text-3xl font-bold text-gray-100 text-center">
        hi, it's <span class="text-red-500">Yuda</span>
      </h2>
      <p class="text-xl text-gray-300 mb-6 text-center">
        i'm a <span class="text-red-500">junior web developer</span>
      </p>
      <p class="max-w-xl text-center text-sm sm:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>

      <section id="project" class="w-full mt-16">
        <div class="m-11 max-w-7xl mx-auto">
          <div class="card shadow-md flex flex-col p-10 border-t rounded-2xl">
            <div class="cardHead text-center">
              <p class="text-2xl font-medium">Projects</p>
            </div>
            <div class="cardBody grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div
                v-for="project in projects"
                :key="project.src"
                class="flex flex-col items-center"
              >
                <img
                  :src="project.src"
                  alt="Project Image"
                  class="w-full h-52 object-cover mb-4 rounded-lg"
                />
                <p class="text-center text-gray-300 mb-4">
                  {{ project.description }}
                </p>
                <div
                  class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 shadow-md border-t transition"
                >
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skill" class="w-full mt-16">
        <div class="cardHead text-center">
              <p class="text-2xl font-medium">Skills</p>
            </div>
        <div class="m-11 max-w-screen-md mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          <div
            v-for="skill in skills"
            :key="skill.src"
            class="card shadow-md flex flex-col p-4 border-t rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              :src="skill.src"
              alt="Skill Image"
              class="w-full max-h-40 object-cover colums-3 mb-2 rounded-lg"
            />
            <div class="cardHead text-center">
              <p class="text-base font-medium text-gray-700">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="max-w-lg w-full bg-gray-900 p-8 rounded-lg shadow-md mt-16"
      >
        <h2 class="text-3xl font-bold text-gray-100 text-center mb-6">
          Contact Me
        </h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-gray-300">Name</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label for="email" class="block text-gray-300">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label for="message" class="block text-gray-300">Message</label>
            <textarea
              v-model="form.message"
              id="message"
              required
              class="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="px-6 py-2 bg-gray-800 text-white font-bold rounded-lg shadow-md border-t hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
        <div v-if="formSent" class="mt-6 text-center text-green-500">
          Your message has been sent!
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import k1 from "../assets/img/sekolah.png";
import k2 from "../assets/img/perpus.png";


import s1 from "../assets/img/htm.png";
import s2 from "../assets/img/cs.png";
import s3 from "../assets/img/vu.png";
import s4 from "../assets/img/Postgresql.png";
import s5 from "../assets/img/nuxt.png";
import s6 from "../assets/img/Bootstrap.png";
import s7 from "../assets/img/js.png";
import s8 from "../assets/img/visual.png";
import s9 from "../assets/img/figma.png";
import s10 from "../assets/img/Node Js.png";

const projects = ref([
  { src: k1, description: "Web sekolah", link: "https://ujikom-orpin.vercel.app/" },
  { src: k2, description: "Perpustakaan Digital", link: "https://yyda-perpus.vercel.app/" },
  { src: k1, description: "Kantin SPW (masih dalam perbaikan)", link: "/maintenance" },
]);

const skills = ref([
  { src: s1, description: "HTML" },
  { src: s2, description: "CSS" },
  { src: s3, description: "Vue Js" },
  { src: s4, description: "Postgresql" },
  { src: s5, description: "Nuxt Js" },
  { src: s6, description: "Bootstrap" },
  { src: s7, description: "Java Script" },
  { src: s8, description: "Visual Studio" },
  { src: s9, description: "Figma" },
  { src: s10, description: "Node Js" },
]);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const formSent = ref(false);

const submitForm = () => {
  formSent.value = true;
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
