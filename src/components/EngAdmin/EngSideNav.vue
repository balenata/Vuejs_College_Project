<template>
  <div>
    <div class="sidebar col-md-3">
      <ul>
        <li class="item" v-for="(loop, i) in loops" :key="i">
          <a
            class="big-hover"
            style="cursor:pointer;"
            @click="loop.toggle = !loop.toggle"
            ><font-awesome-icon class="mr-2" :icon="loop.icon" />
            {{ loop.name }}</a
          >
          <div class="smenu" v-show="loop.toggle">
            <a
              @click="loop.whatching = !loop.whatching"
              class="little-hover changeColor1"
              href="#"
              >First Grade</a
            >
            <div v-show="loop.whatching" class="smenu">
              <router-link :to="loop.router1" class="little-hover changeColor">
                Show Students
              </router-link>
              <br />
              <br />
            </div>
            <a
              @click="loop.whatching0 = !loop.whatching0"
              class="little-hover changeColor1"
              href="#"
              >Second Grade</a
            >
            <div v-show="loop.whatching0" class="smenu">
              <router-link :to="loop.router2" class="little-hover changeColor">
                Show Students
              </router-link>
              <br />
              <br />
            </div>
            <a
              @click="loop.whatching1 = !loop.whatching1"
              class="little-hover changeColor1"
              href="#"
            >
              Third Grade</a
            >
            <div v-show="loop.whatching1" class="smenu">
              <router-link :to="loop.router3" class="little-hover changeColor">
                Show Students
              </router-link>
              <br />
              <br />
            </div>
            <a
              @click="loop.whatching2 = !loop.whatching2"
              class="little-hover changeColor1"
              href="#"
              >Fourth Grade</a
            >
            <div v-show="loop.whatching2" class="smenu">
              <router-link :to="loop.router4" class="little-hover changeColor">
                Show Students
              </router-link>
              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      shows: false,
      seen: false,
      seens: false,
      watch: false,
      whatching: false,
      loops: [
        {
          name: 'Communication',
          toggle: false,
          icon: 'broadcast-tower',
          whatching: false,
          whatching0: false,
          whatching1: false,
          whatching2: false,
          router1: '/eng-admin/communication-eng-showStudents1',
          router2: '/eng-admin/communication-eng-showStudents2',
          router3: '/eng-admin/communication-eng-showStudents3',
          router4: '/eng-admin/communication-eng-showStudents4'
        },
        {
          name: 'Mechanical',
          toggle: false,
          icon: 'cogs',
          whatching: false,
          whatching0: false,
          whatching1: false,
          whatching2: false,
          router1: '/eng-admin/mechanical-eng-showStudents1',
          router2: '/eng-admin/mechanical-eng-showStudents2',
          router3: '/eng-admin/mechanical-eng-showStudents3',
          router4: '/eng-admin/mechanical-eng-showStudents4'
        },
        {
          name: 'Oil and Energy',
          toggle: false,
          icon: 'gas-pump',
          whatching: false,
          whatching0: false,
          whatching1: false,
          whatching2: false,
          router1: '/eng-admin/oil-and-energy-eng-showStudents1',
          router2: '/eng-admin/oil-and-energy-eng-showStudents2',
          router3: '/eng-admin/oil-and-energy-eng-showStudents3',
          router4: '/eng-admin/oil-and-energy-eng-showStudents4'
        },
        {
          name: 'Electrical',
          toggle: false,
          icon: 'lightbulb',
          whatching: false,
          whatching0: false,
          whatching1: false,
          whatching2: false,
          router1: '/eng-admin/electrical-showStudents1',
          router2: '/eng-admin/electrical-showStudents2',
          router3: '/eng-admin/electrical-showStudents3',
          router4: '/eng-admin/electrical-showStudents4'
        },
        {
          name: 'City Planning',
          toggle: false,
          icon: 'city',
          whatching: false,
          whatching0: false,
          whatching1: false,
          whatching2: false,
          router1: '/eng-admin/city-planning-showStudents1',
          router2: '/eng-admin/city-planning-showStudents2',
          router3: '/eng-admin/city-planning-showStudents3',
          router4: '/eng-admin/city-planning-showStudents4'
        }
      ]
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidebar {
  overflow: auto;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background: #042331;
}

.sidebar ul a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 10px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
}
a.big-hover:hover {
  padding-left: 20px;
  transition: 0.4s;
}
.little-hover:hover {
  padding-left: 70px !important;
  transition: 0.4s !important;
}
.little-hover {
  font-size: 16.5px !important;
  padding-left: 60px !important;
}
.smenu {
  overflow: hidden;
}
.smenu a {
  display: block;
  position: relative;
}
.smenu a::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 100%;
  background: #3498db;
  left: 0;
  top: 0;
  transition: 0.4s !important;
  opacity: 0;
}
.smenu a:hover::before {
  opacity: 1;
}
.changeColor1 {
  color: rgba(255, 255, 255, 0.445) !important;
}
.changeColor {
  color: rgba(25, 29, 233, 0.959) !important;
  padding-left: 70px !important;
}
</style>
