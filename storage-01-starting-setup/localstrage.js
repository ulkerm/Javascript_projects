const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    user: 'Max',
    age: 30,
    hobbies: ['Sport', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    localStorage.setItem('uid', userId);
    localStorage.setItem('uid', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
    const extractedId = localStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('uid'));
    console.log(extractedUser);
    if (extractedId) {
        console.log('Got the ID - ' + extractedId);
    } else {
        console.log('Could not find ID');
    };
});