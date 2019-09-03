class FaktaPriceStrategy {
    getDescription() {
        return "Velkommen til Faktas parkeringsplads. Her er det gratis de første 5 minutter og herefter koster det 20DKK pr. påbegyndte 15 minut."
    }

   calculatePrice(from, to) {
        const time = ((to - from) / 1000) - 5;
        if (time < 0) {
            return 0;
        } else {
            return 20 * (Math.floor(time/15) + 1);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new FaktaPriceStrategy()));
});
