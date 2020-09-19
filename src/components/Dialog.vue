<template>
    <div>
      <v-card v-if="!confirmed">
        <v-card-title class="title white lighten-2 text-center">
          Add A Shifu (Teacher)
        </v-card-title>
        <v-divider/>
        <div class="text-center pa-6">

            <input type="text" placeholder="Twitter Handle of the Teacher" class="input-box" v-model="shifu.h"/>
            <input type="text" placeholder="Name of the Teacher" class="input-box" v-model="shifu.n"/>
            <input type="text" placeholder="What can we learn from them? (6 words)" class="input-box" v-model="shifu.l"/>
            <input type="text" placeholder="One tweet or thread from them. (link)" class="input-box" v-model="shifu.t"/>
        
        </div>

        <v-divider></v-divider>

        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn
            color="#DBA449"
            depressed rounded dark
            @click="saveShifu()"
          >
            Add The Shifu
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else style="padding:2%;">
           <v-card-title class="title white lighten-2 text-center">
               <span style="margin:auto;margin-top:20px;">
                    <v-icon color="success" large>mdi-check-circle</v-icon>
                    
                </span>
                
            </v-card-title>
            <div class="text-center title">Thanks, Shifu submitted.</div>
            <div class="text-center">They will be enlisted in a bit.</div>
          
            <!-- <v-divider></v-divider> -->

            <v-card-actions class="pa-6 text-center">
            <v-spacer></v-spacer>
            <v-btn
                style="margin:auto;"
                color="#DBA449"
                depressed rounded dark
                @click="close()"
            >
                Close
            </v-btn>
            </v-card-actions>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            shifu:{h:"",n:"",l:"",t:""},
            confirmed:false,
            // dialog:false,
        }
      
    },
    methods:{
        close(){
            
            this.shifu={h:"",n:"",l:"",t:""}
            this.$store.state.dialog=false;
            this.confirmed=false;
        },
        saveShifu(){
            if(!this.shifu.h){
                return
            }
            // this.$store.state.dialog = false;
            this.confirmed = true;
            axios.post("https://api.airtable.com/v0/appPLmEYom0tgq094/twitgurus",{
                "records": [
                    {
                    "fields": {
                        "Name": this.shifu.n,
                        "Handle":this.shifu.h,
                        "Teaches":this.shifu.l,
                        "Tweet":this.shifu.t,
                    }
                    },
                ]
                },{
                "headers": {
                    'Authorization': 'Bearer keyi8xeS7R14GnpKw',
                    'Content-Type':'application/json',
                }
            }).then((response)=>{
            console.log("Res", response.status)
            }).catch(err=>{
            this.emailSubmitted=false;
            console.log("error: ", err);
            })
        },
    },

    computed:{
        dialog(){
            return this.$store.state.dialog;
        }
    }
}
</script>

<style scoped>
.input-box{
    border:1px solid #ddd;
    background:#fff;
    border-radius:30px;
    padding: 2% 3%;
    position:relative;
    width:80%;
    margin:2%;
}

.input-box:focus{
    outline:none;
    border: 1px solid #aaa;
}
</style>