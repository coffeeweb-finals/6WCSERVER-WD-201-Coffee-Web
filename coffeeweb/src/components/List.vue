<template> 
<div class="list">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Reservation Date</th>
                        <th>Reservation Time</th>
                        <th>Orders</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in Customer" :key="customer._id">
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>{{ customer.date }}</td>
                        <td>{{ customer.time }}</td>
                        <td>{{ customer.orders }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: customer._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteCustomer(customer._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Customer: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Customer = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteCustomer(id){
                let apiURL = `http://localhost:4000/api/delete-customer/${id}`;
                let indexOfArrayItem = this.Customer.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Customer.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 5px;
    }
    .list{
    padding-top: 10%;
    text-align: center;
    font-size: 30px;
}
</style>