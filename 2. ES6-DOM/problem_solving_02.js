const friends = ['Rahim', 'Karim', 'Jabbar', 'Rafiq', 'Safiq', 'Bangladesh'];

// Given an array of friends' names, find and display the name with the longest length

const checkFriend = (array) => {
    let name = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > name.length)
            name = array[i];
    }
    return name;
};

const result = checkFriend(friends);
console.log(result);