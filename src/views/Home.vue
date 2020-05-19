<template>
    <div class="home">
        <BMI></BMI>
    </div>
</template>

<script>
// @ is an alias to /src
import BMI from "@/components/BMI.vue";

export default {
    name: "Home",
    components: {
        BMI
    }
};
</script>
