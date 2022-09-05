// local review data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web Developer",
        img: "https://randomuser.me/api/portraits/women/21.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras nec placerat ex. Donec ac ornare magna. Maecenas quis gravida nunc. Integer volutpat nisl sit amet leo congue dapibus. ",
    },
    {
        id: 2,
        name: "Brom lancaster",
        job: "UX/UI Designer",
        img: "https://randomuser.me/api/portraits/men/64.jpg",
        text:  
            "ipsum dolor sit amet, consectetur adipiscing elit Cras nec placerat ex. Donec ac ornare magna. ",
    },
    {
        id: 3,
        name: "Elizabeth ford",
        job: "Programmer",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "consectetur adipiscing elit Cras nec placerat ex. Donec ac ornare magna. Maecenas quis gravida nunc. Integer volutpat nisl sit amet leo congue ",
    },
    {
        id: 4,
        name: "annie washington",
        job: "Photographer",
        img: "https://randomuser.me/api/portraits/women/73.jpg",
        text: "dolor sit amet, consectetur adipiscing elit Cras nec placerat ex. Donec ac ornare magna. Maecenas quis gravida nunc. Integer volutpat nisl sit amet leo congue dapibus.",
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function (){
  showPerson(currentItem);
})

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});

//show Preview person

prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();   
})

//show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})

