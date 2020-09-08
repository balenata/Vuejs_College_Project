<template>
  <div>
    <!-- @submit.prevent="fornownothing" -->
    <form style="margin-left:45%;margin-top:50px;">
      <div class="form-group w-50">
        <label for="exampleFormControlInput1">Username</label>
        <input type="name" class="form-control" placeholder="Enter name" />
      </div>
      <div class="form-group w-50">
        <label for="exampleFormControlInput1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
        />
      </div>
      <div class="form-group w-50">
        <label for="multiple_select">select status</label>
        <select
          name="multiple_select"
          id="multiple_select"
          class="form-control selectpicker"
          multiple
        >
          <option v-for="p in allPermissions" :key="p.id" :value="p.id">
            {{ p.codename.replace('_', ' ') }}
          </option>
        </select>
      </div>
      <div class="form-group w-50">
        <label for="exampleFormControlInput1">Passcode</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter passcode"
          v-model="passcode"
        />
      </div>
      <button :disabled="isDisabled" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  mounted() {
    Axios.get('get_permissions/').then(response => {
      this.allPermissions = response.data
    })
  },

  data() {
    return {
      allPermissions: [],
      passcode: ''
    }
  },

  computed: {
    isDisabled() {
      return this.passcode !== 'balenata'
    }
  }
}
</script>

<style lang="scss" scoped></style>
