class CurrencyConverter {
    private exchangeRates: { [key: string]: number };

    constructor() {
        // Define exchange rates
        this.exchangeRates = {
            'USD': 1.0,
            'PKR': 275.87,
            'EUR': 0.85,
            'AUD': 1.36
        };
        
        // Get elements
        const amountInput = document.querySelector('.amount input') as HTMLInputElement;
        const fromSelect = document.querySelector('.from select') as HTMLSelectElement;
        const toSelect = document.querySelector('.to select') as HTMLSelectElement;
        const resultMsg = document.querySelector('.msg') as HTMLDivElement;

        // Button click event
        document.querySelector('button')?.addEventListener('click', () => {
            const amount = parseFloat(amountInput.value);
            const fromCurrency = fromSelect.value;
            const toCurrency = toSelect.value;

            if (!isNaN(amount) && this.exchangeRates[fromCurrency] && this.exchangeRates[toCurrency]) {
                const convertedAmount = this.convert(amount, fromCurrency, toCurrency);
                resultMsg.textContent = `${amount} ${fromCurrency} is equivalent to ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                resultMsg.textContent = 'Invalid input or currency';
            }
        });
    }

    private convert(amount: number, fromCurrency: string, toCurrency: string): number {
        const baseAmount = amount / this.exchangeRates[fromCurrency];
        return baseAmount * this.exchangeRates[toCurrency];
    }
}

// Initialize converter
new CurrencyConverter();
