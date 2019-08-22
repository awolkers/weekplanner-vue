<template>
    <header class="header">
        <h1 class="header__heading">{{ title }}</h1>
        <p class="header__subheading">{moment().format('MMMM YYYY')} - Week {moment().format('w')}</p>
        <ul class="header__nav">
            <li class="header__nav-item">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li class="header__nav-item">
                <router-link to="/settings">Settings</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'the-header',

    computed: {
        title() {
            return this.$store.state.global.title
        }
    }
}
</script>

<style lang="scss">
.header {
    background: #03a9f4;
    padding: 16px;
    color: #fff;

    &__heading {
        margin: 0;
    }

    &__subheading {
        margin: 0;
        font-size: 18px;
        text-transform: capitalize;
        opacity: 0.8;
    }

    &__nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;

        &-link {
            color: inherit;
            &:hover,
            &:focus {
                text-decoration: none;
            }
        }

        &-item {
            &:not(:first-child) {
                margin-left: 8px;
            }
        }
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto;
        grid-gap: 0 16px;

        &__heading {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }

        &__subheading {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }

        &__nav {
            grid-column: 2 / 3;
            grid-row: 1 / 3;
            align-self: end;
        }
    }
}
</style>
