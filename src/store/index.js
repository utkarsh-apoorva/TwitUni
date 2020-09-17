import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persons:[
      
      {
        n: "Naval Ravikant",
        h:"naval",
        l:"How to be happy and wealthy.",
        t:"https://twitter.com/naval/status/1002103360646823936",
        p:"https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg",

      },
      {
        n:"Nir Eyal", //name
        h:"nireyal", //handle
        l:"How to build habit-forming products.", //what we can learn
        t:"https://twitter.com/nireyal/status/1303325968849805312", //top tweet
        p:"https://pbs.twimg.com/profile_images/1265244667936817157/D-6ihQO4_400x400.jpg", //profile image
      },
      {
        n:"Pieter Levels", //name
        h:"levelsio", //handle
        l:"How to be a serial maker and build in public.", //what we can learn
        t:"https://twitter.com/levelsio/status/1300540136199991296", //top tweet
        p:"https://pbs.twimg.com/profile_images/1246134413857079296/ebtodgqL_400x400.jpg", //profile url
      },
      {
        n:"David Perell", //name
        h:"david_perell", //handle
        l:"How to write to build an audience", //what we can learn
        t:"https://twitter.com/david_perell/status/1254258945255862278", //top tweet
        p:"https://pbs.twimg.com/profile_images/1298333250079752195/9zaKSNHm_400x400.jpg", //profile url
      },
      {
        n:"Harry Dry", //name
        h:"harrydry", //handle
        l:"How to be awesome at marketing", //what we can learn
        t:"https://twitter.com/GoodMarketingHQ/status/1281592433931948033", //top tweet
        p:"https://pbs.twimg.com/profile_images/1134544282067578880/mhMbBTa2_400x400.png", //profile url
      },
      {
        n:"Daniel Vassallo", //name
        h:"dvassallo", //handle
        l:"How to become financially independent", //what we can learn
        t:"https://twitter.com/dvassallo/status/1287210142459547648", //top tweet
        p:"https://pbs.twimg.com/profile_images/1251370705985302528/S3hD_wEU_400x400.jpg", //profile url
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
