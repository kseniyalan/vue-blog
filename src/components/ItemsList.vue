<template>
  <v-container>
    <v-row class="list__cafes-title">
      <v-col>
        <h2 class="text-center text-h3 py-3">There will be 4 wide elements</h2>
      </v-col>
    </v-row>
    
    <v-row class="list__cafes-content">
      <v-col md="4" v-for="item in items" :key="item.id">
        <v-card>
          
          <v-img
            height="250"
            :src="item.img"
          ></v-img>
          
          <v-card-title>
            <h3 class="text-h4">{{ item.title }}</h3>
          </v-card-title>
          
          <v-card-text>
            <p class="text-body-1">{{ item.description }}</p>
          </v-card-text>
        
        </v-card>
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script>
export default {
  name: 'ItemsList',
  data: () => ({
    items: [
      {
        id: 0,
        title: 'Cafe 1',
        description: 'The best!',
        img: '../assets/logo.svg'
      },
      {
        id: 1,
        title: 'Cafe 2',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
      {
        id: 2,
        title: 'Cafe 3',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
      {
        id: 3,
        title: 'Cafe 4',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
      {
        id: 4,
        title: 'Cafe 5',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
    ]
  })
}
</script>