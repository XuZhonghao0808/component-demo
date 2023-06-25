<template>
    <div>
        <p>{{ $store.state.count }}</p>
        <button @click="add">+1</button>
        <h1>发现音乐</h1>
        <router-link to="/discover/recommend">推荐</router-link> |
        <router-link to="/discover/ranking">排行榜</router-link> |
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            this.$store.commit('increment')
        }
    },
    components: {
        // Recommend,
        // Ranking
    }
}
</script>