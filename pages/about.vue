<template>
  <!-- Technical/CV Info -->
  <section class="flex flex-1 mt-12 mb-8 text-white py-8">
      <div class="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-12">

        <!-- Left side information (sticky) -->
        <div class="flex flex-col w-full lg:sticky lg:top-12 lg:w-2/3 mt-2 px-8 justify-center items-center">
          <img
            class="w-48 h-48 bg-indigo-700 p-2 rounded-full"
            src="#"
            alt="profile"
          />

          <p class="text-xl md:text-2xl leading-normal md:leading-relaxed">{{$config.PORTFOLIO_NAME}}</p>
          <p class="ml-2 text-indigo-600 uppercase tracking-loose mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <p class="text-sm md:text-md text-center text-gray-100 mb-4">
            Nam sagittis ac ex eu molestie. Vestibulum a mattis ex. Nulla accumsan ut mauris quis suscipit. Aliquam ut augue tellus. Curabitur in rutrum mi, a sagittis tortor.
          </p>
          <p class="text-sm md:text-md text-center text-gray-100 mb-4">Lorem Ipsum</p>
          <div class="flex gap-2">
            <a :href="$config.PORTFOLIO_LINKEDIN" class="cursor-pointer"><img src="../assets/images/svg/linkedin-icon.svg" class="object-fit h-10 w-10" alt="linkedin"/></a>
            <a :href="`https://github.com/${$config.GITHUB_USERNAME}`" class="cursor-pointer"><img src="../assets/images/svg/git-icon.svg" class="object-fit h-10 w-10" alt="git"/></a>
          </div>
        </div>
        <!-- End left side information (sticky) -->

        <!-- Experiences/CV entries -->
        <div class="ml-0 md:ml-12 xl:ml-24 w-full sticky">
          <div class="container mx-auto w-full h-full">
            <div class="p-4">

              <h1 class="text-center text-3xl mb-4">Experiences</h1>
              <!-- Timeline divider -->
              <div class="absolute h-full border" style="right: 50%; border: 2px solid #4338ca; border-radius: 1%;"></div>
              <div class="absolute h-full border" style="left: 50%; border: 2px solid #4338ca; border-radius: 1%;"></div>
              <!-- End Timeline divider -->

              <!-- List of all CV Entries -->
              <CvEntry :is-reverse="true" cv-date="february 2020 - current" cv-title="Company here">
                Content here
                <PostTag :tags="['.NET Core', 'DWH']"/>
              </CvEntry>
              <CvEntry :is-reverse="false" cv-date="february 2020 - current" cv-title="Company here">
                Content here
                <PostTag :tags="['.NET Core', 'DWH']"/>
              </CvEntry>
              <!-- End list of all CV Entries -->

            </div>

            <img class="mx-auto w-96 -mt-12" src="../assets/images/svg/code.svg" alt="code"/>
          </div>
        </div>
        <!-- End Experiences/CV entries -->

      </div>
  </section>
  <!-- End Technical/CV Info -->
</template>

<script>

export default {
  name: 'AboutPage',

  computed: {
    age() {
      return this.$moment().diff(this.$moment(this.$config.PORTFOLIO_DOB, 'dd-MM-yyyy'), 'years');
    }
  }
}
</script>
