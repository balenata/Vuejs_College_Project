<template>
  <div>
    <form
      style="margin-left:25%;margin-top:50px;"
      @submit.prevent="fornownothing"
    >
      <div class="form-group">
        <label for="exampleFormControlInput1">Username</label>
        <input type="name" class="form-control" placeholder="Enter name" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
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
export default {
  data() {
    return {
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
