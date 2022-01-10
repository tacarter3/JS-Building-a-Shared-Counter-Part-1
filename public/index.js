async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const refreshButton = document.querySelector('#refresh-button');
    //let countValue = 0;

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();

    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    function refreshed(){
        const initial = await fetch('http://localhost:9001/counter');
        const final = await initial.json();
        let countValue = final.value;
        countContainer.textContent = countValue;
    }

    

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refreshed)
    countContainer.textContent = countValue;
}
main()