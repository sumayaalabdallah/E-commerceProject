<script></script>
<template>
  <section class="mt-16">
    <v-footer
      class="mt-16"
      color="#ecf5f4"
      style="margin: 0 10px; border-radius: 30px"
    >
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="6" lg="3" align-self="start">
            <v-img
              src="../../assets/download.png"
              width="150"
              height="50"
              alt="footer-img"
            ></v-img>
            <p class="py-10">
              Quis nostrud exercitatin ullamc boris nisi ut aliquip ex ea
              commodo conse.
            </p>
            <div class="py-1 d-flex justify-space-evenly align-start">
              <v-btn icon color="white">
                <v-icon size="1.5rem" color="#4a5556"> mdi-github </v-icon>
              </v-btn>

              <v-btn icon color="white">
                <v-icon size="1.5rem" color="#4a5556"> mdi-linkedin </v-icon>
              </v-btn>

              <v-btn icon color="white">
                <v-icon size="1.5rem" color="#4a5556"> mdi-facebook </v-icon>
              </v-btn>

              <v-btn icon color="white">
                <v-icon size="1.5rem" color="#4a5556"> mdi-twitter </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="6" lg="3" align-self="start">
            <ul>
              <h1 class="ml-4">Address</h1>
              <li>
                <v-icon size="1.5rem" class="mx-2">mdi-map-marker</v-icon
                ><span>20, Awesome Road, New York</span>
              </li>
              <li>
                <v-icon size="1.5rem" class="mx-2">mdi-phone</v-icon
                ><span>+123 456 7890</span>
              </li>
              <li>
                <v-icon size="1.5rem" class="mx-2">mdi-email</v-icon
                ><span>hello@ulina.com</span>
              </li>
              <li>
                <v-icon size="1.5rem" class="mx-2">mdi-whatsapp</v-icon
                ><span>+321 654 9870</span>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" lg="3" align-self="start" class="ps-5">
            <h1>Useful Links</h1>
            <ul>
              <li><p>Shop Coupon</p></li>
              <li><p>About us</p></li>
              <li><p>Carrer</p></li>
              <li><p>Supports</p></li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" lg="3" align-self="start">
            <h1>Categories</h1>
            <ul>
              <li>
                <p>Men <span class="pa-3">Womman</span></p>
              </li>
              <li>
                <p>Kids <span class="pa-3">Accessories </span></p>
              </li>
              <li>
                <p>Bags <span class="pa-3">Jewellary</span></p>
              </li>
              <li>
                <p>Clothes <span class="pa-3">Shoes</span></p>
              </li>
            </ul>
          </v-col>
          <v-divider color="#bbbdc4" class="border-opacity-75 my-8"></v-divider>
          <p>
            Copyright ©
            {{ new Date().getFullYear() }} by
            <strong> Sumaya Alabdallah</strong>
          </p>
        </v-row>
      </v-container>
    </v-footer>
  </section>
</template>

<style scoped>
* {
  font-family: system-ui;
}
h1 {
  font-weight: 500;
  font-size: 24px;
  color: #589195;
}
p,
span {
  font-size: 16px;
  font-weight: 500;
  color: #4a5556;

  text-decoration: none;
}
ul {
  list-style-type: none;
}
ul li {
  padding: 0.7rem 0;
}
</style>
