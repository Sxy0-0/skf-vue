<template>
    <div>
        {{message}}
    </div>
</template>

<script setup lang="ts">
import { Ref, ref, isRef, reactive, toRef } from 'vue';


interface Data {
  name: string
  age: number
}

const message:Ref<string> = ref("test");

const data:Data = reactive({
    age:13,
    name:'sxy'
})


const name = toRef(data,'name');

console.log(name.value)


if(isRef(message)){
    console.log("是ref");
}

</script>

<style>

</style>
