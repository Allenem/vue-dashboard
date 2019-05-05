<template>
    <div class="message-alert">
        <div class="alert alert-dismissible" :class="'alert-'+item.status" v-for="(item,i) in message" :key="i">
            {{ item.message }}
            <button type="button" class="close" @click="removeMessage(i)" aria-label="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
    export default {
        name: 'Navbar',
        data() {
            return {
                message: [],
            };
        },
        methods: {
            updateMessage(message, status) {
                const timestamp = Math.floor(new Date()/1000);
                this.message.push({
                    message,
                    status,
                    timestamp,
                });
                this.removeMessageWhithTiming(timestamp);
            },
            removeMessage(num){
                this.message.splice(num,1);
            },
            removeMessageWhithTiming(timestamp){
                const vm = this;
                setTimeout(() => {
                    vm.message.forEach((item,i) => {
                        if(item.timestamp === timestamp){
                            vm.message.splice(i,1);
                        }
                    });
                },5000)
            },
        },
        created() {
            const vm = this;
            vm.$bus.$on('message:push',(message,status='warning') =>{
                vm.updateMessage(message,status);
            });
        },
    }
</script>

<style scoped>
.message-alert {
    position: fixed;
    max-width: 50%;
    top: 56px;
    right: 20px;
    z-index: 1100;
}
</style>