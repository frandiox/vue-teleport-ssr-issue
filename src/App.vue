<template>
  <div>
    Hello world

    <Suspense>
      <teleport to="body">
        <div>Static teleport works</div>
      </teleport>

      <AsyncComponent />
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const AsyncComponent = defineAsyncComponent(() =>
  import("./AsynComponent.vue")
);

export default {
  components: { AsyncComponent },
};
</script>
