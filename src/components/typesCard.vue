<script></script>
<template>
  <section class="my-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="5" sm="6" class="man ma-1">
          <div class="content">
            <span class="subtitle">Stay Upto Date</span>
            <h3 class="title">Men’s Trendy Fashion</h3>
            <a href="#">
              <div class="link pt-3">
                <v-icon icon="mdi-arrow-right-bold"></v-icon>SHOP NOW
              </div>
            </a>
          </div>
        </v-col>
        <v-col cols="12" md="5" sm="6" class="woman ma-1">
          <div class="content">
            <span class="subtitle">Get 40% Off</span>
            <h3 class="title">Women’s New Collection</h3>
            <a href="#"
              ><div class="link pt-3">
                <v-icon icon="mdi-arrow-right-bold"></v-icon>SHOP NOW
              </div></a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
.man {
  background-image: url(../assets/man.jpg);
  background-position: 50%;
  background-size: cover;
  border: 10px solid #fff;
  border-radius: 5px;
  border-radius: 17px;
  height: 394px;
  margin: 0 0 24px;
  overflow: hidden;
  padding: 20px 0 14px 38px;
  position: relative;
  text-align: left;
}
.woman {
  background-image: url(../assets/woman.jpg);

  background-size: cover;
  border: 10px solid #fff;
  border-radius: 5px;
  border-radius: 17px;
  height: 394px;
  margin: 0 0 24px;
  overflow: hidden;
  padding: 20px 0 14px 38px;
  position: relative;
  text-align: left;
}
.content {
  position: absolute;
  top: 34%;
}
.subtitle {
  font-family: system-ui;
  color: #3c7f84;
  font-weight: 500;
  font-size: 20px;
}
.title {
  font-family: system-ui;
  color: #34394c;
  font-weight: 500;
  font-size: 36px;
  margin: 0 0 11px;
  width: 300px;
}
a {
  text-decoration: none;
  color: #7b808c;
  font-family: Jost, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  margin-top: 22px;
}
a .link:hover {
  transform: translateX(1rem);
  transition: all 0.3s ease-in-out;
  color: #0aa3a3;
}
</style>
