<template>
<div class="customer">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Sign up for Reservation</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label class="title">Name</label>
                    <input type="text" class="form-control" v-model="customer.name" required>
                </div>
                <div class="form-group">
                    <label class="title">Email</label>
                    <input type="email" class="form-control" v-model="customer.email" required>
                </div>
                <div class="form-group">
                    <label class="title">Phone</label>
                    <input type="text" class="form-control" v-model="customer.phone" required>
                </div>

                <div class="form-group">
                    <label class="title">Date of Reservation</label>
                    <input type="date" class="form-control" v-model="customer.date" required>
                </div>

                <div class="form-group">
                    <label class="title">Time of Reservation</label>
                    <input type="time" class="form-control" v-model="customer.time" required>
                </div>

                <h2>***Orders for Reservation***</h2> <br>

                <div class="form-group">
                    <label class="title">Coffee:</label>
                    <label for="No Coffee">
                        <input type="checkbox" id="No Coffee" value="No Coffee" v-model="customer.orders">
                        None
                    </label>
                    
                    <label for="Cappuccino">
                        <input type="checkbox" id="Cappuccino" value="Cappuccino" v-model="customer.orders">
                        Cappuccino
                    </label>
                    
                    <label for="Cafe Americano">
                        <input type="checkbox" id="Cafe Americano" value="Cafe Americano" v-model="customer.orders">
                        Cafe Americano
                    </label>
                    
                    <label for="Mochaccinno">
                        <input type="checkbox" id="Mochaccinno" value="Mochaccinno" v-model="customer.orders">
                        Mochaccinno
                    </label>
                    
                    <label for="Café Bombon">
                        <input type="checkbox" id="Café Bombon" value="Café Bombon" v-model="customer.orders">
                        Café Bombon
                    </label>
                    <br> <br>

                    <label class="title">Pasta:</label>
                    <label for="No Pasta">
                        <input type="checkbox" id="No Pasta" value="No Pasta" v-model="customer.orders">
                        None
                    </label>
                    
                    <label for="Spaghetti Bolognese">
                        <input type="checkbox" id="Spaghetti Bolognese" value="Spaghetti Bolognese" v-model="customer.orders">
                        Spaghetti Bolognese
                    </label>
                    
                    <label for="Creamy Carbonara">
                        <input type="checkbox" id="Creamy Carbonara" value="Creamy Carbonara" v-model="customer.orders">
                        Creamy Carbonara
                    </label>
                    
                    <label for="Baked Lasagna">
                        <input type="checkbox" id="Baked Lasagna" value="Baked Lasagna" v-model="customer.orders">
                        Baked Lasagna
                    </label>
                    
                    <label for="Mac and Cheeses">
                        <input type="checkbox" id="Mac and Cheeses" value="Mac and Cheeses" v-model="customer.orders">
                        Mac and Cheeses
                    </label>
                    <br> <br>

                    <label class="title">Pastry:</label>
                    
                    <label for="No Pastry">
                        <input type="checkbox" id="No Pastry" value="No Pastry" v-model="customer.orders">
                        None
                    </label>
                    
                    <label for="Strawberry Shortcake">
                        <input type="checkbox" id="Strawberry Shortcake" value="Strawberry Shortcake" v-model="customer.orders">
                        Strawberry Shortcake
                    </label>
                    
                    <label for="Chocolate fruit cake">
                        <input type="checkbox" id="Chocolate fruit cake" value="Chocolate fruit cake" v-model="customer.orders">
                        Chocolate fruit cake
                    </label>
                    
                    <label for="French Macaroons">
                        <input type="checkbox" id="French Macaroons" value="French Macaroons" v-model="customer.orders">
                        French Macaroons
                    </label>
                    
                    <label for="Red Velvet">
                        <input type="checkbox" id="Red Velvet" value="Red Velvet" v-model="customer.orders">
                        Red Velvet
                    </label>
                </div> <br>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Submit</button>
                </div> <br>
            </form>
        </div>
    </div>

    <footer>
        <address>
        <br/>
        <p class="copyright">	
            &#9749;COFFEE WEB 2022&#169; All rights reserved</p>
        </address>
    </footer>
</div>
    
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                customer: {
                   name: '',
                   email: '',
                   phone: '',
                   date: '',
                   time: '',
                   orders: [],
                }
            }
        },
        
        reset: function (){
            return initialState();
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-customer';
                
                axios.post(apiURL, this.customer).then(() => {
                  this.$router.push('/view')
                  this.customer = {
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    orders: [],
                  }
                }).catch(error => {
                    console.log(error)
                });
            },
        }
    }
    
</script>

<style scoped>
.customer{
    padding-top: 5%;
}

input[type=checkbox] {
    vertical-align: middle;
    position: relative;
    bottom: 1px;
}
    
label {
    display: block;
}

.title{
    font-size: 20px;
    font-weight: bold;
}

  p{
    color:#5c8f52;
    padding: 10px 15px;
    text-align: center;
  }
  address{
    height: 8vh;
    width: 100%;
  }
  footer {
    width: 100%;
    height: 60%;
    bottom: 0;
    background-color: #DEDEDE;
    color: brown;
    padding: 30px;
    font-size: 15px;
    line-height: 20px;
  }
</style>