<template>
    <main class="main">
        <Week></Week>
    </main>
</template>

<script>
// @ is an alias to /src
import Week from '@/components/Week'

export default {
    name: 'dashboard',
    components: {
        Week
    }
}
</script>
