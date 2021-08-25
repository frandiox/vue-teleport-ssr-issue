<template>
  <div>
    My Async Component with broken teleport
    <teleport to="body">
      <div>Async teleport doesn't work</div>
    </teleport>
  </div>
</template>

<script>
export default {
  // Comment out this async setup to make it work
  async setup() {
    await new Promise((resolve) => setTimeout(resolve, 200));
  },
};
</script>
