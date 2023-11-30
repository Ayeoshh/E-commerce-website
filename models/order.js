const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    OrderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true
    }],
    shippingAddress1: {
        type: String,
        required: true,
    },
    shippingAddress2:{
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country : {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    }
})

productSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
productSchema.set('toJSON',{
    virtual: true,
});

exports.Order = mongoose.model('Order', orderSchema);

// order example:
// {
//     "orderItems": [
//         {
//             "quantity": 2, // any number
//             "product" : "eubf394832h9fbu34bf", // product id
//         },
//         {
//             "quantity": 3, // any number
//             "product" : "8huewibf34b2unub", // product id 
//         }
//     ],
//     "shippingAddress1" : " address fo the person",
//     "shippingAddress2" : "2nd address",
//     "city": "city",
//     "zip": "243252",
//     "country": "country name",
//     "phone" : "23543632423",
//     "user": "ewbfiu23bfu23bfo", // user id

// }
