<template>
  <div class="container">
    <div class="select-section">
      <select name="cars" id="cars" @change="getVal($event.target.value)">
        <option value="en">ENG</option>
        <option value="ge">GEO</option>
        <option value="ru">RUS</option>
      </select>
    </div>
    <div class="text">
       <p>{{t('title', {}, {locale:lang})}}</p>
       <p>{{t('sub-text', {}, {locale:lang})}}</p>
    </div>
    <button>clcik</button>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n'
export default {
  name: "App",

  setup(){
   const {t,locale} = useI18n();
   return {t,locale}
  },
  data(){
   return{
     lang:'ENG'
   }
  },
   methods:{
      getVal(lang){
      this.lang = lang
      console.log(this.lang)
   }
   }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container{
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
}
</style>
