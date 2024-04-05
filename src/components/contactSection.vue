<script></script>
<template>
  <section class="py-5" id="contact">
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
              type="text"
              label="Your Name"
              bg-color="#ecf5f4"
              color="#34394c"
              variant="outlined"
              rounded="xl"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="7">
            <v-text-field
              type="email"
              label="Your Email"
              bg-color="#ecf5f4"
              color="#34394c"
              variant="outlined"
              rounded="xl"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="7">
            <v-text-field
              type="text"
              label="Subject"
              bg-color="#ecf5f4"
              color="#34394c"
              variant="outlined"
              rounded="xl"
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="7">
            <v-textarea
              :rows="5"
              type="text"
              bg-color="#ecf5f4"
              color="#34394c"
              variant="outlined"
              label="Message"
              rounded="xl"
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
          <ul class="social-icons d-flex justify-center align-center">
            <li>
              <v-btn icon color="#d0d8d7">
                <v-icon size="2.5rem" color="#4a5556"> mdi-github </v-icon>
              </v-btn>
            </li>
            <li>
              <v-btn icon color="#d0d8d7">
                <v-icon size="2.5rem" color="#4a5556"> mdi-linkedin </v-icon>
              </v-btn>
            </li>
            <li>
              <v-btn icon color="#d0d8d7">
                <v-icon size="2.5rem" color="#4a5556"> mdi-facebook </v-icon>
              </v-btn>
            </li>
            <li>
              <v-btn icon color="#d0d8d7">
                <v-icon size="2.5rem" color="#4a5556"> mdi-twitter </v-icon>
              </v-btn>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
.btn {
  background: linear-gradient(0deg, #79bbbf, #589195);
  font-size: 18px;
  font-weight: 500;
  font-family: system-ui;
  padding: 0 1.1rem;
  position: relative;
  border: 1px solid #34394c;
  color: #34394c !important;
}
.btn:hover {
  background: linear-gradient(0deg, #8fc6c9, #77c7cd);
  box-shadow: inset 0px 1px 0px 0px rgb(88, 145, 149, 0.4);
  transition: all 0.3s ease-in-out;
  letter-spacing: 2px;
}
.btn:active {
  top: 10px;
}
.social-icons li {
  border-radius: 50%;
  animation: sunshine 3s infinite;
  margin: 20px;
}
ul {
  list-style-type: none;
}

@keyframes sunshine {
  0% {
    box-shadow: 0 0 0 0px rgba(79, 153, 158, 0.4);
  }

  100% {
    box-shadow: 0 0 0 15px rgba(133, 195, 199, 0.4);
  }
}
</style>
