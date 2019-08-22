<template>
    <main class="main">
        <h1>This is the settings page</h1>

        <div>
            <label>
                <!-- Title
                <input type="text" name="title" @change="handleChange" value="{settings.title}" />-->
                <!-- {{ title }} -->
                <input type="text" :value="title" name="title" @input="handleChange" maxlength="50" />

                <input type="text" v-model.trim="title2" />
            </label>
        </div>

        <!-- <div>
            <label>
                Language
                <select name="locale" @change="handleChange" value="{settings.locale}">
                    <option value="nl">Nederlands</option>
                    <option value="en">English</option>
                </select>
            </label>
        </div>

        <div>
            <label>
                First day of the week
                <select name="dow" onChange="{this.handleIntChange}" value="{settings.dow}">
                    <option value="0">{moment.weekdays()[0]}</option>
                    <option value="1">{moment.weekdays()[1]}</option>
                    <option value="2">{moment.weekdays()[2]}</option>
                    <option value="3">{moment.weekdays()[3]}</option>
                    <option value="4">{moment.weekdays()[4]}</option>
                    <option value="5">{moment.weekdays()[5]}</option>
                    <option value="6">{moment.weekdays()[6]}</option>
                </select>
            </label>
        </div>-->
    </main>
</template>

<script>
import { mapState } from 'vue'

export default {
    name: 'settings',

    data() {
        return {}
    },
    computed: {
        title2: {
            get() {
                return this.$store.state.global.title
            },
            set(value, f) {
                console.log(value, f)
            }
        },
        title() {
            return this.$store.state.global.title
        }
    },
    methods: {
        handleChange(e) {
            console.log(e)
            const target = e.target
            const value = target.type === 'checkbox' ? target.checked : target.value.trim()
            const name = target.name

            this.$store.dispatch('global/changeValue', {
                key: name,
                value
            })
        }
    }
}
</script>
