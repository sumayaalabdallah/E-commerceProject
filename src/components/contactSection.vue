<script></script>
<template>
  <section class="pt-16" id="contact">
    <v-container>
      <v-row>
        <v-col>
          <h1
            style="
              color: #589195;
              font-family: system-ui;
              font-weight: 500;
              font-size: 40px;
            "
            class="text-center"
          >
            Contact Us
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-form v-model="valid">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="7">
            <v-text-field
              label="Your Name"
              bg-color="#ecf5f4"
              color="#34394c"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="7">
            <v-text-field
              label="Your Email"
              bg-color="#ecf5f4"
              color="#34394c"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="7">
            <v-text-field
              label="Subject"
              bg-color="#ecf5f4"
              color="#34394c"
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="7">
            <v-textarea
              bg-color="#ecf5f4"
              color="#34394c"
              label="Message"
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="7">
            <v-btn color="#589195" class="btn" rounded="xl" size="large">
              Send Message
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container class="mt-10">
      <v-row>
        <v-col cols="12">
          <ul class="social-icons py-1 d-flex justify-center">
            <li>
              <a href="https://github.com/sumayaalabdallah">
                <v-btn icon color="#d0d8d7">
                  <v-icon size="2.5rem" color="#4a5556"> mdi-github </v-icon>
                </v-btn>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sumaya-alabdallah-4aa51b276">
                <v-btn icon color="#d0d8d7">
                  <v-icon size="2.5rem" color="#4a5556"> mdi-linkedin </v-icon>
                </v-btn>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/somya.alabdllah.3?mibextid=D4KYlr"
              >
                <v-btn icon color="#d0d8d7">
                  <v-icon size="2.5rem" color="#4a5556"> mdi-facebook </v-icon>
                </v-btn>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/somya.alabdllah.3?mibextid=D4KYlr"
              >
                <v-btn icon color="#d0d8d7">
                  <v-icon size="2.5rem" color="#4a5556"> mdi-twitter </v-icon>
                </v-btn>
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
.btn {
  font-size: 1.01rem;
  font-weight: 500;
  font-family: system-ui;
  padding: 0 1.1rem;
}
.social-icons li {
  margin-right: 2.5rem;
  border-radius: 50%;
  animation: sunshine 3s infinite;
}
ul {
  list-style-type: none;
}
.social-icons a :hover {
  color: #3c4153 !important;
}
@keyframes sunshine {
  0% {
    box-shadow: 0 0 0 0px rgb(60, 65, 83, 0.4);
  }

  100% {
    box-shadow: 0 0 0 20px rgb(60, 65, 83, 0);
  }
}
</style>
