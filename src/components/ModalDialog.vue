<template>
  <v-dialog
    v-model="isOpen"
    max-width="95%"
    max-height="95%"
    persistent
    scrollable
    transition="dialog-top-transition"
  >
    <v-card>
      <v-card-title class="headline">{{ header }}</v-card-title>
      <v-card-text style="height: 95%;">
        <v-img
          max-width="1600"
          max-height="900"
          :src="imgSrc"
          class="d-flex align-end">
        </v-img>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="amber darken-3" text @click="onSubmit">close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalDialog",
  props: {
    header: {
      type: String,
      require: true,
    },
    isOpen: {
      type: Boolean,
      require: true,
    },
    imgSrc: {
      type: String,
      require: true,
    },
    onSubmit: {
      type: Function,
      require: true,
    },
    fullscreen: {
      type: Boolean,
      require: false,
    },
    hideOverlay: {
      type: Boolean,
      require: false,
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
</style>