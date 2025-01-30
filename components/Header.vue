  <template>
    <header class="bg-gray-900 text-gray-100 p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 class="text-xl font-bold">YAS</h1>
      <nav>
        <ul class="flex space-x-6">
          <!-- Menu Home -->
          <li>
            <nuxt-link to="/" class="hover:text-red-500 transition duration-300">HOME</nuxt-link>
          </li>

          <!-- Dropdown Profil -->
          <li class="group inline-block">
            <div class="flex items-center cursor-pointer hover:text-red-500 transition duration-300">
              <p>PROFILE</p>
              <Icon name="material-symbols:keyboard-arrow-down" size="1rem" class="group-hover:rotate-180" />
            </div>
            <ul class="absolute hidden group-hover:block">
              <li v-for="profile in profiles" :key="profile.id" class="p-2 hover:bg-gray-500 bg-gray-700">
                <nuxt-link :to="profile.path" class="block">{{ profile.name }}</nuxt-link>
              </li>
            </ul>
          </li>

          <!-- Menu Contact -->
          <li>
            <nuxt-link to="#contact" class="hover:text-red-500 transition duration-300">CONTACT</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>

  <script setup>
  const profiles = ref([
    { id: 1, path: "#project", name: "PROJECT" },
    { id: 2, path: "#skill", name: "SKILL" },
  ]);
  </script>
