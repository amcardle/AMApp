<template>
    <div>
        <h3>Stewart Calculator</h3>
        <form id="StewartCalc">
            Base Excess meq/L
            <input type="text" class="form-control" v-model="base_excess" />
            <br />
            Na meq/L
            <input type="text" class="form-control" v-model="Na" />
            <br />
            Cl meq/L
            <input type="text" class="form-control" v-model="Cl" />
            <br />
            Lactate meq/L
            <input type="text" class="form-control" v-model="lactate" />
            <br />
            Albumin g/L
            <input type="text" class="form-control" v-model="albumin" />
            <br />
            Na Cl Effect = {{ parseFloat(Na) - parseFloat(Cl) - 35 }} meq/L
            <br />
            Lactate Effect = {{ 1 - parseFloat(lactate) }} meq/L
            <br />
            Albumin Effect = {{ 0.25 * (42 - parseFloat(albumin)) }} meq/L
            <br />
            Other Ions =
            {{
                parseFloat(base_excess) -
                    (parseFloat(Na) - parseFloat(Cl) - 35) -
                    (1 - parseFloat(lactate)) -
                    0.25 * (42 - parseFloat(albumin))
            }}
        </form>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Stewart",
  setup() {
    let base_excess = ref("0");
    let Na = ref("140");
    let Cl = ref("105");
    let lactate = ref("1");
    let albumin = ref("42");

    return {
      Na,
      Cl,
      lactate,
      albumin,
      base_excess
    };
  }
});
</script>