const formatDate = (currentData) => {

    const today = new Date(currentData);
    let day = today.getDate();

    if(day > 0 && day < 10){
        day = `0${day}`;
    }

    let months = today.getMonth() + 1;

    if(months > 0 && months < 10){
        months = `0${months}`;
    }

    const year = today.getFullYear();

    return `${day}/ ${months} / ${year} `;
}

export default formatDate;
