<template>
  <div class="hi mt-3 col-md-9">
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control search-input"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
      <div class="col-md-6 mt-2 ">
        <a class="btn" data-toggle="modal" href="#addStudent"
          ><font-awesome-icon class="mr-1 " icon="plus" />Add Student</a
        >
      </div>
    </div>
    <br />
    <table class="table table-hover">
      <thead class="border border-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Department</th>
          <th scope="col">Stage</th>
          <th scope="col">Year</th>
          <th scope="col">Mobile Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tr class="border">
        <th scope="row">1</th>
        <td>this is image</td>
        <td>mechanic4</td>
        <td>123fsafsdfs</td>
        <td>Communication</td>
        <td>4</td>
        <td>2019-2020</td>
        <td>07731756990</td>
        <td>
          <a
            href="#editStudent"
            data-toggle="modal"
            class="edit1 text-success mr-2 fa-lg"
            ><font-awesome-icon icon="edit"
          /></a>
          <a
            href="#deleteModal"
            data-toggle="modal"
            class="delete1 text-danger ml-3 fa-lg"
            ><font-awesome-icon icon="trash-alt"
          /></a>
        </td>
      </tr>
    </table>

    <!-- Modal Section For Adding Student -->
    <div class="modal fade" id="addStudent">
      <div class="modal-dialog  ">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">Add Student</h5>
            <button class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <generatePassword />
              </div>
            </div>
            <form class="row">
              <div class="form-group col-md-6">
                <label for="title">UserName</label>
                <input
                  type="text"
                  v-model="addStudent.username"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="title">Password</label>
                <input
                  type="text"
                  v-model="addStudent.password"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="title">Department</label>
                <input
                  type="text"
                  v-model="addStudent.department"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="title">Stage</label>
                <input
                  type="text"
                  v-model="addStudent.stage"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="title">Year</label>
                <input
                  type="text"
                  v-model="addStudent.year"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="title">MobileNumber</label>
                <input
                  type="text"
                  v-model="addStudent.mobileNumber"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label>Choose Photo:</label>
                <br />
                <img
                  :src="image"
                  class="preview-image grab"
                  @click="onUpload"
                />
                <input
                  id="changeImage"
                  name="image"
                  type="file"
                  @change="updatePreview"
                  style="display:none;"
                />
              </div>
              <button
                :disabled="
                  addStudent.username &&
                  addStudent.password &&
                  addStudent.stage &&
                  addStudent.department &&
                  addStudent.year &&
                  addStudent.mobileNumber &&
                  image.length > 0
                    ? false
                    : true
                "
                type="submit"
                class="btn saveStudent col-md-12"
              >
                Save Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Section For Editing Student -->
    <div class="modal fade" id="editStudent">
      <div class="modal-dialog  ">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">Edit Student</h5>
            <button class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="title">UserName</label>
                <input
                  type="text"
                  v-model="addStudent.username"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="title">Password</label>
                <input
                  type="text"
                  v-model="addStudent.password"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="title">Department</label>
                <input
                  type="text"
                  v-model="addStudent.department"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="title">Stage</label>
                <input
                  type="text"
                  v-model="addStudent.stage"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="title">Year</label>
                <input
                  type="text"
                  v-model="addStudent.year"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="title">MobileNumber</label>
                <input
                  type="text"
                  v-model="addStudent.mobileNumber"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Choose Photo:</label>
                <br />
                <img
                  :src="image"
                  class="preview-image grab"
                  @click="onUpload"
                />
                <input
                  id="changeImage"
                  name="image"
                  type="file"
                  @change="updatePreview"
                  style="display:none;"
                />
              </div>
              <button
                :disabled="
                  addStudent.username &&
                  addStudent.password &&
                  addStudent.stage &&
                  addStudent.department &&
                  addStudent.year &&
                  addStudent.mobileNumber &&
                  image.length > 0
                    ? false
                    : true
                "
                type="submit"
                class="btn saveStudent"
              >
                Save Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">Delete</h5>
            <button class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="lead">Are you sure you want to delete this</p>
            <div class="row">
              <button
                @click="deleteData"
                data-dismiss="modal"
                class="btn deleteStudent mr-3"
              >
                Delete
              </button>
              <button data-dismiss="modal" class="btn cancelDeleting">
                Cancel
              </button>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generatePassword from '@/components/EngAdmin/GeneratePassword'
export default {
  components: {
    generatePassword
  },
  data() {
    return {
      addStudent: {
        username: null,
        password: null,
        department: ' Mechanical',
        year: null,
        mobileNumber: null,
        stage: '4'
      },
      image:
        'https://www.allianzhost.com/wp-content/themes/arkahost/assets/images/default.png'
    }
  },
  methods: {
    onUpload() {
      document.getElementById('changeImage').click()
    },
    updatePreview(e) {
      this.imageData = e.target.files[0]
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = e => {
        this.image = e.target.result
      }
    }
  }
}
</script>

<style scoped>
.hi {
  left: 20%;
}

.btn {
  margin-left: 50%;
  background-color: rgba(67, 111, 231, 0.829);
  border-radius: 100px;
  color: #fff;
  padding: 10px;
  transition: all 0.5s;
}
.btn:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}
.edit1 {
  cursor: pointer;
}
.delete1 {
  cursor: pointer;
}
.search-input {
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid rgb(29, 26, 26);
  transition: all 0.4s;
}

.search-input:focus {
  background: transparent;
  box-shadow: none;
  border-bottom: 2px solid #4e35dc;
}

.search-button {
  border-radius: 50%;

  padding: 10px 16px;
  transition: all 0.4s;
}

.search-button:hover {
  background-color: #eee;
  transform: translateY(-1px);
}
img {
  max-width: 200px;
}

.preview-image {
  width: 400px;
  height: 200px;
}
.grab {
  cursor: -webkit-grab;
  cursor: grab;
}
.saveStudent {
  margin-left: 0 !important;
  background-color: rgba(67, 111, 231, 0.829);
  border-radius: 100px;
  color: #fff;
  padding: 10px;
  transition: all 0.5s;
}
.saveStudent:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}
.deleteStudent {
  margin-left: 5px;
  background-color: rgb(189, 28, 28);
  border-radius: 100px;
  color: #fff;
  padding: 5px;
}
.deleteStudent:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.cancelDeleting {
  margin-left: 5px;
  background-color: #a9a9a9;
  border-radius: 100px;
  color: #fff;
  padding: 5px;
}
.cancelDeleting:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
