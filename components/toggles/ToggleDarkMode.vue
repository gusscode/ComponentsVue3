<script setup>
import { useToggleDark } from '../../composables/hooks/useToggle'
import { toggleProps } from '../../composables/props/toggleProps'

const props = defineProps({ ...toggleProps, local:{type: Boolean, default:false} })
const emit = defineEmits(["update:modelValue"])

const { state, toggleRef, leverInRef, changeState } = useToggleDark(props, emit)


</script>

<template>
    <div @click="changeState" class="g-toggle-container">
        <div v-if="state" class="svg-box">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M46 77C63.6731 77 78 62.6731 78 45C78 45 60.2222 57.4599 46 45C31.7778 32.5401 46 13 46 13C28.3269 13 14 27.3269 14 45C14 62.6731 28.3269 77 46 77ZM44 72C55.5 71 64 69 74 51C74 51 54 62.5 41.5 48.5C29 34.5 39.5 17 39.5 17C27.5 20.5 19 28.8645 19 43.5C19 52 22 68.5 44 72Z"
                    fill="#D9D9D9" />
            </svg>


        </div>

        <div v-if="!state" class="svg-box">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.3169 3.06354L45.9993 18.0602L43 17.9966L43.3176 3L46.3169 3.06354Z" fill="#D9D9D9" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M70 45C70 58.8071 58.8071 70 45 70C31.1929 70 20 58.8071 20 45C20 31.1929 31.1929 20 45 20C58.8071 20 70 31.1929 70 45ZM45 65C56.0457 65 65 56.0457 65 45C65 33.9543 56.0457 25 45 25C33.9543 25 25 33.9543 25 45C25 56.0457 33.9543 65 45 65Z"
                    fill="#D9D9D9" />
                <path d="M45.9993 87.0602L46.3169 72.0635L43.3176 72L43 86.9966L45.9993 87.0602Z" fill="#D9D9D9" />
                <path d="M73 43H88V46H73V43Z" fill="#D9D9D9" />
                <path d="M17 43H2V46H17V43Z" fill="#D9D9D9" />
                <path d="M64 24.6066L74.6066 13.9999L76.7279 16.1213L66.1213 26.7278L64 24.6066Z" fill="#D9D9D9" />
                <path d="M23.6066 61.9999L13 72.6066L15.1213 74.7278L25.7279 64.1213L23.6066 61.9999Z" fill="#D9D9D9" />
                <path d="M76.728 72.6066L66.1215 61.9999L64.0001 64.1213L74.6067 74.7278L76.728 72.6066Z"
                    fill="#D9D9D9" />
                <path d="M16.1214 13.9999L26.728 24.6066L24.6067 26.7278L14.0001 16.1213L16.1214 13.9999Z"
                    fill="#D9D9D9" />
            </svg>

        </div>
        

    </div>
</template>


<style lang="scss" scoped>
.g-toggle-container{
    width: 30px;
    height: 30px;
}
svg path {
    fill: var(--g-text);
}

.svg-box,
svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.g-toggle-container:hover svg path{
    fill:  var(--g-text-light);
    filter: drop-shadow(5px 5px 5px var(--g-shadow-box));
}
</style>