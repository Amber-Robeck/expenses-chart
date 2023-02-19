console.log("Connected")
//get all span tags from the graph
const span = Array.from(document.querySelectorAll('.graph>span'));
console.log(span)

const data =
    [
        {
            "day": "mon",
            "amount": 17.45
        },
        {
            "day": "tue",
            "amount": 34.91
        },
        {
            "day": "wed",
            "amount": 52.36
        },
        {
            "day": "thu",
            "amount": 31.07
        },
        {
            "day": "fri",
            "amount": 23.39
        },
        {
            "day": "sat",
            "amount": 43.28
        },
        {
            "day": "sun",
            "amount": 25.48
        }
    ]


span.forEach((day) =>
    data.forEach((item) => {
        // console.log(item.day)
        // console.log(day.innerText)
        if (day.innerText === item.day) {
            console.log(day.innerText, item.amount)
            // day.innerText = day.innerText + item.amount
            let div = document.createElement('div');
            div.setAttribute('data-amount', item.amount);
            div.style.height = 2 * item.amount + 'px';
            div.style.background = 'red';
            div.innerText = item.amount
            day.prepend(div)
        }
    })
    // console.log(day)
)
