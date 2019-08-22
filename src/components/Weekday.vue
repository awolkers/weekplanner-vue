<template>
    <div :class="['weekday', isBackgroundColorLight ? 'weekday--light' : 'weekday--dark']" :style="styleObject">
        <h3 class="weekday__heading">
            <span class="weekday__heading-day">{day}</span>
            <span class="weekday__heading-day-of-month">{dayOfMonth}</span>
        </h3>
        <div class="weekday__content">{content} {{ backgroundColor }} {{ isBackgroundColorLight }}</div>
    </div>
</template>

<script>
import { hexToRgb, isLightColor } from '../utils/colors'

export default {
    name: 'weekday',
    props: {
        backgroundColor: {
            type: String,
            default: '#f00'
        }
    },
    data() {
        return {
            styleObject: {
                backgroundColor: this.backgroundColor,
                fontSize: '13px'
            }
        }
    },
    computed: {
        isBackgroundColorLight() {
            return isLightColor(hexToRgb(this.backgroundColor))
        }
    }
}
</script>

<style lang="scss">
.weekday {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    min-width: 240px;
    min-height: 400px;
    width: 100%;
    scroll-snap-align: start;
    border-radius: 4px;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.1);

    &__heading {
        display: flex;
        margin: 0;
        padding: 8px 16px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 4px 4px 0 0;
        text-transform: capitalize;

        &-day-of-month {
            margin-left: auto;
        }
    }

    .weekday--dark .weekday-heading {
        background: rgba(0, 0, 0, 0.2);
    }

    &__content {
        padding: 16px;
    }

    &--dark {
        color: #fff;
    }

    @media (min-width: 768px) {
        min-width: 180px;
    }
}
</style>
