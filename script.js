function update_date_and_time() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    
    dateTimeElement.innerHTML = now.toLocaleString("en-US");
}

setInterval(update_date_and_time , 1000);
update_date_and_time();