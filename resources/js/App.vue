<template>  
   <component :is="layout">
      <router-view />
    </component>
</template>

<script >  

import { computed } from "vue";
import { useRouter, useRoute } from "vue-router"; 
import { authComputed } from './vuex/helpers.js'
import { mapState } from "vuex"; 
// 

import { $themeConfig } from './themeConfig'
import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import EmptyLayout from "./components/layouts/EmptyLayout.vue"; 

export default {  
    components: {DefaultLayout, EmptyLayout},
    setup(){
      return { 

      };
    },
    computed: {
      layout() {
        if (this.$route.meta.layout === 'empty') return 'empty-layout'
        return `${this.contentLayoutType}-layout`
      },
      contentLayoutType() { 
        return $themeConfig.layout.type
      },
    },
    created() {
      // console.log($themeConfig.layout.type);
    }
  }
</script>
 