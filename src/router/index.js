import vueRouter from 'vue-router'
import Vue from 'vue'

import Discover from '../components/Discover.vue'
import Friends from '../components/Friends.vue'
import My from '../components/My.vue'
import Recommend from '../components/Recommend.vue'
import Ranking from '../components/Ranking.vue'
import Music from '../components/Music.vue'

Vue.use(vueRouter)

const routes = new vueRouter({
    routes: [
        {
            path: '/discover', component: Discover,
            children: [
                {
                    path: 'recommend', component: Recommend,
                    children: [
                        {
                            path: ':id', component: Music
                        }]
                },
                {
                    path: 'ranking', component: Ranking
                }]
        },{
            path: '/friends', component: Friends
        },{  
            path: '/my', component: My
        },
        {
            path: '/', redirect: '/discover/recommend'
        }
    ]
})

export default routes
