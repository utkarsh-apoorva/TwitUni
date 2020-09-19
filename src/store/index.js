// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialog:false,
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
      {
        n:"Toby",
        h:"tobydoyhowell",
        l:"How to win at social media marketing.",
        t:"https://twitter.com/tobydoyhowell/status/1272674455681024000",
        p:"https://pbs.twimg.com/profile_images/1245052793167261696/zr5GRYOJ_400x400.jpg"
      },
      {
        n:"Matthew Kobach",
        h:"mkobach",
        l:"How to sell stuff online by building an audience",
        t:"https://twitter.com/mkobach/status/1287140026061656070",
        p:"https://pbs.twimg.com/profile_images/1306246859724333056/uNRa5dLU_400x400.jpg"
      },
      {
        n:"Arvid Kahl",
        h:"arvidkahl",
        l:"How to build and sell a bootstrapped business.",
        t:"https://twitter.com/arvidkahl/status/1300522667104178177",
        p:"https://pbs.twimg.com/profile_images/1201525049766883328/QPimCC9z_400x400.jpg"
      },
      {
        n:"Lenny Rachitsky",
        h:"lennysan",
        l:"How to grow your product with high retention.",
        t:"https://twitter.com/lennysan/status/1299077345681133568",
        p:"https://pbs.twimg.com/profile_images/1045128763229388801/iHyfBUK4_400x400.jpg"
      },
      {
        n:"Alex and Books ",
        h:"AlexAndBooks_",
        l:"How to Read, and Learn fast.",
        t:"https://twitter.com/AlexAndBooks_/status/1237146642018639872",
        p:"https://pbs.twimg.com/profile_images/1280346022510768129/0VXAXu-__400x400.jpg"
      },
      {
        n:"Shreyas Doshi",
        h:"shreyas",
        l:"How to be a great product manager.",
        t:"https://twitter.com/shreyas/status/1303150374124048386",
        p:"https://pbs.twimg.com/profile_images/1268224036418408449/TFTKnr___400x400.jpg"
      },
      {
        n:"Jack Butcher",
        h:"jackbutcher",
        l:"How to express ideas better, visually.",
        t:"https://twitter.com/jackbutcher/status/1303376950346612737",
        p:"https://pbs.twimg.com/profile_images/1180173290134032385/BALpn1Ab_400x400.jpg"
      },
      {
        n:"Robin Vander Heyden",
        h:"vinrob",
        l:"How to run a bootstrapped business.",
        t:"https://twitter.com/Vinrob/status/1080331951536463872",
        p:"https://pbs.twimg.com/profile_images/1094527949049479168/RLspdjG1_400x400.jpg"
      },
      {
        n:"Aleksandr Volodarsky",
        h:"volodarik",
        l:"How a business can survive a pandemic.",
        t:"https://twitter.com/volodarik/status/1278336866744512513",
        p:"https://pbs.twimg.com/profile_images/1260611953455661057/w41cgZI8_400x400.jpg"
      },
      {
        n:"KP",
        h:"thisiskp_",
        l:"How to build in public.",
        t:"https://twitter.com/thisiskp_/status/1303315459329208321",
        p:"https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg"
      },
      {
        n:"Florin Pop",
        h:"florinpop1705",
        l:"How to rapidly make web apps with javascipt.",
        t:"https://twitter.com/florinpop1705/status/1303904111876767744",
        p:"https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_400x400.jpg"
      },
      {
        n:"Deepu Asok",
        h:"Deepuasok",
        l:"Wisdom expressed in fun illustrations",
        t:"https://twitter.com/Deepuasok/status/1305344123638083585",
        p:"https://pbs.twimg.com/profile_images/1278409650287915016/e4IDHr17_400x400.jpg"
      },
      {
        n:"Matt Johnson, PhD",
        h:"mattjohnsonisme",
        l:"Consumer Neuroscience",
        t:"https://twitter.com/mattjohnsonisme/status/1293895411221004290",
        p:"https://pbs.twimg.com/profile_images/1275799961913851906/mSVAcyaF_400x400.jpg"
      },
      {
        n:"Jonathan Hey",
        h:"jonohey",
        l:"Smart ideas via sketches",
        t:"https://twitter.com/jonohey/status/1056535881002168320",
        p:"https://pbs.twimg.com/profile_images/1154385143/Jono_out_of_doors_b_w_400x400.jpg"
      },
      {
        n:"James Baird",
        h:"james_d_baird",
        l:"How to create online courses",
        t:"https://twitter.com/james_d_baird/status/1302994836832821249",
        p:"https://pbs.twimg.com/profile_images/1285650719232659457/0cZJIQ7B_400x400.jpg"
      },
      {
        n:"Leo Bassam",
        h:"loaibassam",
        l:"How to build in public.",
        t:"https://twitter.com/loaibassam/status/1302219731739475970",
        p:"https://pbs.twimg.com/profile_images/1275065091184943106/pGJqb40Y_400x400.jpg"
      },
      {
        n:"Erik Torenberg",
        h:"eriktorenberg",
        l:"Wide range - VC, Careers, Company Building and more.",
        t:"https://twitter.com/eriktorenberg/status/1250313333707665409",
        p:"https://pbs.twimg.com/profile_images/1287125350481199104/q8n6lmtp_400x400.jpg"
      },
      {
        n:"Jim Raymount",
        h:"JimRaymount",
        l:"Twitter MBA",
        t:"https://twitter.com/JimRaymount/status/1291076244797304838",
        p:"https://pbs.twimg.com/profile_images/1279442226091884550/7j08oQlx_400x400.jpg"
      },
      {
        n:"Aella",
        h:"Aella_Girl",
        l:"Democracy. Freedom. Human Sexuality. Psychology",
        t:"https://twitter.com/Aella_Girl/status/1305535756794908673",
        p:"https://pbs.twimg.com/profile_images/1274552351106326536/Nfe6uRZg_400x400.jpg"
      },
      {
        n:"Steph Smith",
        h:"stephsmithio",
        l:"How to do content right",
        t:"https://twitter.com/stephsmithio/status/1138816442336284672",
        p:"https://pbs.twimg.com/profile_images/1079803857264205835/T2ZDra6d_400x400.jpg"
      },
      {
        n:"𝐂𝐀𝐑𝐎𝐋𝐈𝐍𝐄",
        h:"CVRLNE",
        l:"How to build an ecommerce business",
        t:"https://twitter.com/CVRLNE/status/1302703042924511232",
        p:"https://pbs.twimg.com/profile_images/1199949383342731264/uv7DBn8X_400x400.jpg"
      },{
        n:"Randall Kanna",
        h:"RandallKanna",
        l:"How to be a great developer",
        t:"https://twitter.com/RandallKanna/status/1299033257942478848",
        p:"https://pbs.twimg.com/profile_images/1276691437711552512/n6VxRfyG_400x400.jpg"
      },{
        n:"swyx",
        h:"swyx",
        l:"How to build a coding career",
        t:"https://twitter.com/swyx/status/1233987348637069312",
        p:"https://pbs.twimg.com/profile_images/1201029434054041606/efWs7Lr9_400x400.jpg"
      },{
        n:"k8",
        h:"katgleason",
        l:"Build a great (funded) company",
        t:"https://twitter.com/katgleason/status/1296580476656914434",
        p:"https://pbs.twimg.com/profile_images/1237339498222141440/NPqltHOs_400x400.jpg"
      },

    ],
  },
  mutations: {
    getShifus(){
      // console.log('Getting Shifus')
    }
  },
  actions: {
    getShifus(context){
      context.commit('getShifus')
    }
  },
  modules: {
  }
})
