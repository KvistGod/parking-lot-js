class BilkaPriceStrategy{
    getDescription(){
        return "Velkommen til Bilkas parkeringsplads Her koster det 10DKK pr. påbegyndte 15 minut."
    }

    calculatePrice(from, to) {
        const time = (to - from) / 1000;
        return 10 * (Math.floor(time/15) + 1);
    }
}

document.addEventListener('DOMContentLoaded',() => {
    main(new ParkingLot(new BilkaPriceStrategy()));
});