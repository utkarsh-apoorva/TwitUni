<template>
    <div class="pa-5 section" @click="profileClicked()">
        <v-row>
            <v-col cols="3">
                <div>
                    <img style="width: 80px; border-radius: 50%;" :src="person.p"/>
                </div>
            </v-col>
            <v-col cols="9">
                <div class="text-left">
                    <div style="display:inline-block">
                        <span class="name">{{person.n}}</span>
                        <span class="ml-2 handle">@{{person.h}}</span>
                    </div>
                    <div>{{person.l}}</div>
                    <div class="tweet-link" @click.stop="tweetClicked()" v-if="person.t">
                        Read this awesome thread
                    </div>
                    
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props:{
        person:Object,
    },

    methods:{
        profileClicked(){
            window.open('https://twitter.com/'+this.person.h, '_blank')
        },
        tweetClicked(){
            window.open(this.person.t, '_blank')
        },
    },
}
</script>

<style scoped>
.tweet-link{
    color:#DBA449;
}
.pic{
    max-width:30px;
    max-height: 30px;
    border-radius:50%;
}

.section{
    border-bottom:1px solid #ddd;
    cursor:pointer;
}

.section:hover{
    background:#efefef;
}

.name{
    font-weight:700;
}

.handle{
    color:#666;
}
</style>