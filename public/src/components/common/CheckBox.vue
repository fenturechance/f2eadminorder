<template>
    <label class="checkbox" :class="chackBoxStyle(selected)">
        <input type="checkbox" style="display:none" v-model="selected" @click="$emit('clickEvent')">
        <i class="fas fa-check"></i>
    </label>
</template>
<script>
export default {
    props: ['selected'],
    methods: {
        chackBoxStyle(selected) {
            return selected ? 'active' : undefined;
        },
    }
}
</script>
<style lang="scss">
    label.checkbox{
        width: 15px;
        height: 15px;
        background-color: #fff;
        display: inline-block;
        border-radius: 2px;
        cursor: pointer;
        i{
            display: none;
        }
        &.active{
            text-align: center;
            i{
                line-height: 15px;
                font-size: 10px;
                display: block;
            }
            background-color: #000;
            color: #fff;
        }
    }
</style>
