<template>

  <div class="mb-8 flex justify-between items-center w-full" :class="{'flex-row-reverse': isReverse}">
    <div class="order-1 w-5/12"></div>
    <div class="order-1 w-5/12 px-1 py-4" :class="isReverse ? 'text-right' : 'text-left'">
      <p class="mb-3 text-base text-indigo-600">{{cvDate}}</p>
      <h4 class="mb-3 font-bold text-lg md:text-2xl">{{cvTitle}}</h4>
      <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
        <slot></slot>
      </p>
    </div>
  </div>

</template>


<script>

export default {
  name: 'CvEntry',

  props: {
    isReverse: {
      required: false,
      default: false,
      type: Boolean
    },
    cvDate: {
      required: true,
      type: String
    },
    cvTitle: {
      required: true,
      type: String
    }
  }
}

</script>
