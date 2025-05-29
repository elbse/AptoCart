module Aptocart::Marketplace {
    struct Product has key {
        id: u64,
        owner: address,
        name: vector<u8>,
        description: vector<u8>,
        price: u64, // in Octas (1 APT = 10^8 Octas)
        available: bool
    }

    struct Store has key {
        owner: address,
        products: vector<Product>
    }

    public entry fun add_product(
        account: &signer,
        name: vector<u8>,
        description: vector<u8>,
        price: u64
    ) {
        let product = Product {
            id: generate_id(),
            owner: signer::address_of(account),
            name,
            description,
            price,
            available: true
        };

        // Add to store
        ...
    }

    // add more functions like update_product, purchase_product, remove_product
}
