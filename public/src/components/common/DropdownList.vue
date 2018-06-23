<template>
    <div>
        <div class="nowShowPeriod" @click.stop="$emit('update:toggle',!toggle)">
            <slot name="showContent"></slot>
            <i class="fas fa-caret-down"></i>
        </div>
        <ul class="periodList listStyle" :class="{ active : toggle }">
            <li v-for="(li,i) in list" @click="$emit('clickLi',i)">{{ li.name }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['toggle','list']
}
</script>
<style lang="scss">
    .listStyle{
        position: absolute;
        right: 0;
        top: 30px;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        display: none;
        color: #000;
        &.active{
            display: inline-block;
        }
        li{
            background-color: #fff;
            padding: 10px;
            &:hover{
                background-color: #000;
                color: #fff;
                cursor: pointer;
            }
        }
    }
</style>
