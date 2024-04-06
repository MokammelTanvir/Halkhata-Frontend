<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          {{ currentYear }}
          &copy; HalKhata.
        </div>
        <div class="col-sm-6">
          <div class="text-sm-end d-none d-sm-block">
            Developed with <i class="mdi mdi-heart text-danger"></i> by
            MokammelTanvir
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
