<template>
    <div class="dropdownListGroup">
        <div class="buttonGroup" @click.stop="$emit('update:toggle',!toggle)">
            <slot name="showContent" class="title"></slot>
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
    .dropdownListGroup{
        position: relative;
        .buttonGroup{
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
            .title{
                margin: 0 10px 0 0;
            }
        }
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
    }
</style>
