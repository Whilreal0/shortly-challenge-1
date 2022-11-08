<template>
  <div class="overflow-hidden" id="app">
    <Navbar/>
    <HomeView/>
    <PricingView/>
    <CallToAuction/>
    <Footer/>
  </div>
</template>
<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeView from '@/views/HomeView'
import PricingView from '@/views/PricingView'
import CallToAuction from '@/views/CallToAuction'

  export default{
    components:{
      Navbar,Footer,HomeView,PricingView,CallToAuction
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;800&display=swap');
body{
  font-family: 'Poppins', sans-serif;
}
</style>
