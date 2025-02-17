var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const checkBigFriend = (array) => {
    let name = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > name.length)
            name = array[i];
    }
    return name;
};

const result = checkBigFriend(friends);
console.log(result);