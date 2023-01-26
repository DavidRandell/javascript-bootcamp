let restaurant = {
    name: "Yamamoori",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount += partySize
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }

}

// seatParty

let seatParty = function(partySize){
    restaurant.guestCount -= partySize
}

//removeParty

let removeParty = function(partySize){
    restaurant.guestCount += partySize
}


restaurant.seatParty(72)

console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)

console.log(restaurant.checkAvailability(4))