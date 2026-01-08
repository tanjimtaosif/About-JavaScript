let obj = {
    addresses: {
        city: 'Dhaka',
        Village: 'Bashundhara'
    }
};

/**
 * WHY USE THIS:
 * The 'if' statement asks: "Does the city actually exist?"
 * The '?.' ensures that if 'addresses' was missing, the code wouldn't crash.
 */
if (obj?.addresses?.city) {
    // If the path is found, we safely update the value
    obj.addresses.city = "Narayanganj";
}

// Since the path was valid, you see the updated object
console.log(obj);
