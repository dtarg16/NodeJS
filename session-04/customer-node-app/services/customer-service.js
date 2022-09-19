var customers = [
    {id:1,name:'Vivek',email:'vivek@abcd.com',phone:'1234567899', address:'India'},
    {id:2,name:'Rama',email:'rama@abcd.com',phone:'wwwww', address:'Asia'},
  ];

const getCustomer = ()=>(customers);

const addCustomer = (customer)=>{
    customer.id = Date.now();
    customers.push(customer);
};

const updateCustomer = (customer)=>{
    console.log(">> updateCustomer ",customer);
    customers.map((record,index)=>{
        if(record.id == customer.id){
            customers[index] = customer;
        }
    })
};
const getCustomerById = (id)=>{
    let temp = customers.filter((record)=>(record.id == id))
    return temp[0];
};
const deleteCustomer = (customer)=>{
    let temp = customers.filter((record)=>(record.id != customer.id))
    customers = temp;
};


module.exports = {getCustomer, addCustomer, updateCustomer, deleteCustomer, getCustomerById};