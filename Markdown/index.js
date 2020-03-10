new Vue({
    el:"#noteBook",
    data(){
        return {
            content:"This is a note",
        }

    },
    computed:{
        notePreview(){
            return marked(this.content)


        }

    }

})