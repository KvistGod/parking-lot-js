class FotexPriceStrategy{
    getDescription(){
        return "Velkommen til Føtex' parkeringsplads Her koster det 15DKK pr. påbegyndte 15 minut."
    }

    calculatePrice(from, to) {
        const time = (to - from) / 1000;
        return 15 * (Math.floor(time/15) + 1);
    }
}

document.addEventListener('DOMContentLoaded',() => {
    main(new ParkingLot(new FotexPriceStrategy()));
});