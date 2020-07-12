export const section = {
    props: {
        title: String,
    },
    data() {
        return {
            hash: this.title.replace(/\s/g, '').toLowerCase()
        }
    },
    created(){
        this.$emit('created', {
            title: this.title,
            id: this.hash
        });
    },
    mounted() {
        this.$el.id = this.hash;
    }
}