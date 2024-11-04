<template>
  <div>
    <mneUnit />
  </div>
</template>
<script>
import mneUnit from "./dashboard/mne-unit.vue";
import { useRouter } from 'vue-router';
import auth from '@/middleware/auth';

export default {
  ssr: false, // Set SSR to false for this specific page
  setup() {
    definePageMeta({
      middleware: [auth],
    })
    // Redirect from the root path ("/") to "/dashboard"
    const router = useRouter();
    router.replace('/dashboard/mne-unit');
  },
  components: {
    mneUnit,
  },
};
</script>
