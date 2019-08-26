<template>
    <main class="main">
        <h1>This is the settings page</h1>

        <div>
            <label>
                Title
                <input type="text" name="title" :value="title" @input="handleChange" maxlength="50" />
            </label>
        </div>

        <div>
            <label>
                Language
                <select name="locale" @change="handleChange" :value="locale">
                    <option value="nl">Nederlands</option>
                    <option value="en">English</option>
                </select>
            </label>
        </div>

        <div>
            <label>
                First day of the week
                <select name="dow" @change="handleChange" :value="dow">
                    <option value="0">{moment.weekdays()[0]}</option>
                    <option value="1">{moment.weekdays()[1]}</option>
                    <option value="2">{moment.weekdays()[2]}</option>
                    <option value="3">{moment.weekdays()[3]}</option>
                    <option value="4">{moment.weekdays()[4]}</option>
                    <option value="5">{moment.weekdays()[5]}</option>
                    <option value="6">{moment.weekdays()[6]}</option>
                </select>
            </label>
        </div>

        <div>
            <label>
                Show weekend
                <input type="checkbox" name="showWeekend" :checked="showWeekend" @change="handleChange" />
            </label>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'settings',

    data() {
        return {}
    },
    computed: {
        ...mapState('global', ['title', 'locale', 'showWeekend', 'dow'])
    },
    methods: {
        handleChange(e) {
            // console.log(e)
            const target = e.target
            const value = target.type === 'checkbox' ? target.checked : target.value.trim()
            const name = target.name

            this.$store.dispatch('global/changeValue', {
                key: name,
                value
            })
        },

        handleIntChange(e) {
            e.currentTarget.value = parseInt(e.currentTarget.value)

            this.handleChange(e)
        },

        handleColorChange(e) {
            const target = e.target
            const colors = this.props.settings.weekdayColors

            colors[e.target.dataset.index] = e.target.value

            this.props.updateSettings({
                [target.name]: colors
            })
        }
    }
}
</script>
