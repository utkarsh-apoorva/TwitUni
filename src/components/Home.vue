<template>
  
    <v-row class="text-center">
      <v-col cols="3" class="top-col hidden-sm-and-down" style="padding:0% 5%;">
        <div>
          <v-img class="logo" src="/favicon.ico"/>
        </div>
        <h3 class="mt-4" style="color:#404040;">ShifuTown</h3>
        <div style="margin-bottom:50px;color:#404040;">Best Teachers on the Planet</div>
        <!-- <v-divider class="mb-6"/> -->
        <div class="menu-items text-left" v-for="item in items" :key="item.title">
          <p class="menu-item" @click="menuClicked(item)">
            <span>
              <v-icon style="font-size:27px;margin:auto;" color="#aaa" >{{item.icon}}</v-icon>
            </span>
            <span class="menu-title ml-4"> {{ item.title }} </span>
          </p>

        </div>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mt-6" large rounded depressed color="#DBA449" dark 
              v-bind="attrs"
              v-on="on"
            >
              <span>Add A Shifu</span>
            </v-btn>
          </template>
          <Dialog/>
        </v-dialog>
      </v-col>
      <v-col cols="12" md="5" class="top-col">
        <h3 class="top-panel text-left pa-6">The Teachers</h3>
        <Profiles v-for="person in persons" :key="person.handle" :person="person"/>
      </v-col>
      <v-col cols="4" class="top-col hidden-sm-and-down">
        <v-img src="/learn.png" style="width:150px;margin:auto;margin-top:60px;"/>
        <h3 style="margin-top:60px;">Make your notes here</h3>
        <div>Coming soon.. </div>
        <div v-if="!emailSubmitted">
          <div style="margin-top:40px;margin-bottom:20px;">
            <input type="text" placeholder="Enter email" class="signup" v-model="email"/>
          </div>
          <div>
            <v-btn rounded depressed dark color="#DBA449" @click="saveEmail">Enroll Me</v-btn>
          </div>
        </div>
        <div v-else style="background:#efefef;width:80%;border-radius:30px;margin:auto;padding:3%;margin-top:40px;">
          <div style="margin-top:0px;margin-bottom:0px;">
            Thanks.
          </div>
          <div>
            We will reach out to you soon. In the meantime, follow the Shifus ❤️
          </div>
        </div>
        <div style="position: fixed;bottom: 20px;right: 10%;">
          Made by <a target="_blank" href="https://twitter.com/kush_apoorva">@kush_apoorva</a>
        </div>
      </v-col>
      
    </v-row>
  
</template>

<script>
  import Profiles from './Profiles'
  import Dialog from './Dialog'
  import axios from 'axios';
  export default {
    name: 'Home',

    components:{
      Profiles,
      Dialog
    },

    data: () => ({
      email:"",
      emailSubmitted:false,
      drawer: true,
      // dialog:false,
      items: [
        { title: 'Home', icon: 'mdi-home-outline' },
        { title: 'But Why?', icon: 'mdi-help-circle-outline', target:'_blank', url:'https://twitter.com/AlexAndBooks_/status/1306273824762200065' },
      ],
    }),

    methods:{
      menuClicked(item){
        if(item.target){
          window.open(item.url, item.target);
        }
      },
      
      saveEmail(){
        if(!this.email){return}
        this.emailSubmitted = true;
        axios.post("https://api.airtable.com/v0/appPLmEYom0tgq094/twituni",{
          "records": [
            {
              "fields": {
                "Email": this.email
              }
            },
          ]
        },{
          headers: {
            'Authorization': `Bearer keyi8xeS7R14GnpKw`,
            'Content-Type':'application/json',
          }
        }).then((response)=>{
          console.log("Res", response.status)
        }).catch(err=>{
          this.emailSubmitted=false;
          console.log("error: ", err);
        })
      }
    },

    computed:{
      persons(){
        return this.$store.state.persons
      },
      dialog:{
        get(){
          return this.$store.state.dialog;
        },
        set(v){
          this.$store.state.dialog = v;
        }
        
      }
    },
    mounted(){
      // this.$store.dispatch('getShifus')
    }
  }
</script>

<style scoped>
.signup{
  border:1px solid #ddd;
  background:#fff;
  border-radius:30px;
  padding: 1% 3%;
  position:relative;
  width:60%;
}

.signup:focus{
  border:1px solid #aaa;
  outline:none;
}

.top-col{
  background:#fff;
  border-right: 1px solid #ddd;
  height:100vh;
  overflow: scroll;
  padding:0;
}
.logo{
  width:48px;
  margin:auto;
  margin-top:40px;
  margin-bottom:10px;
}
.menu-title{
  font-weight:700;
  font-size:20px;
}
.menu-items{
  padding-left:10%;
  /* margin-left:18%; */
}
.menu-item{
  border-radius:50px;
  cursor:pointer;
  display:flex;
  padding:2% 8%;
}
.menu-item:hover{
  color:#DBA449;
  background:#DBA44922;
}

.top-panel{
  min-height:60px;
  border-bottom:1px solid #ddd;
}

</style>
