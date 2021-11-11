<template>
  <div>
    List!!!
    <!-- Empty div -->
  </div>
</template>
<script>
export default {
  name: 'ItemsList',
  data: () => ({
    items_list: [
      {
        id: 0,
        title: 'Cafe 1',
        description: 'The best!',
        img: ''
      },
      {
        id: 1,
        title: 'Cafe 2',
        description: 'Lorem ipsum',
        img: ''
      }
    ]
  })
}
</script>