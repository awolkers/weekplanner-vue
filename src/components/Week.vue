<template>
    <div class="week-scroller">
        <div class="week-wrapper">
            <div class="week">
                <weekday background-color="#f0f"></weekday>
                <weekday></weekday>
                <weekday background-color="#000"></weekday>
                <weekday></weekday>
                <weekday></weekday>
                <!-- {week.map((weekday, key) => ( -->
                <!-- <Weekday key="{key}" foo="{key}" backgroundColor="{weekday.backgroundColor}" day="{weekday.day}" dayOfMonth="{weekday.dayOfMonth}" /> -->
                <!-- ))} -->
            </div>
        </div>
    </div>
</template>

<script>
import Weekday from './Weekday'

export default {
    name: 'week',
    components: {
        Weekday
    }
}
</script>

<style lang="scss">
.week {
    display: flex;
    margin-left: -16px;
    height: 100%;

    &-wrapper {
        min-width: 100%;
        padding: 16px;
        float: left;
        height: 100%;
    }

    &-scroller {
        margin: -16px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-padding: 16px;
        height: calc(100% + 36px);
    }
}
</style>
