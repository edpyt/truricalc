<script setup lang="ts">
import { ref } from "vue";
// TODO:
// import { invoke } from "@tauri-apps/api/core";

enum CalculatorMathematicalOperations {
  Plus = "+",
  Minus = "-",
  Division = "/",
  Multiplication = "*",
}

const currentMathematicalOperation = ref();

// TODO: calculate mathematical operations in Rust
// :^)
// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//   greetMsg.value = await invoke("greet", { name: name.value });
// }
</script>

<template>
  <main class="container">
    <div class="flex">
      <InputText type="text" />

      <div v-for="idx in 3" :key="idx">
        <Button v-for="idxx in 3" :label="idxx" severity="secondary" />
      </div>

      <Button
        v-for="mathOperation in CalculatorMathematicalOperations"
        :label="mathOperation"
        severity="secondary"
      />
    </div>
    selected operation: {{ currentMathematicalOperation }}
  </main>
</template>
