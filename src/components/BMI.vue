<template>
    <div class="add">
        <h3>BMI Calculator</h3>
        <form id="BMIComp">
            Height (cm)
            <input type="text" class="form-control" v-model="height" />
            Weight (kg)
            <input type="text" class="form-control" v-model="weight" />
            <button @click="calculateBMI" type="button" class="btn btn-light">
                Calculate BMI
            </button>
        </form>
        <p>
            <strong>BMI:</strong>
            {{ BMI }} kg/m<sup>2</sup>
        </p>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "BMI",
  setup() {
    let height = ref("0");
    let weight = ref("0");
    let BMI = ref(0);

    function calculateBMI() {
      BMI.value =
        parseInt(weight.value) /
        ((parseInt(height.value) / 100) * (parseInt(height.value) / 100));
    }

    return {
      height,
      weight,
      BMI,
      calculateBMI
    };
  }
});
</script>