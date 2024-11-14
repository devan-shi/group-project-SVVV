document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventDescription = document.getElementById('eventDescription').value;

    // Create a new event item
    const eventList = document.getElementById('eventList');
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');

    eventItem.innerHTML = `
        <div class="event-name">${eventName}</div>
        <div class="event-date">${eventDate}</div>
        <div class="event-description">${eventDescription}</div>
    `;

    // Append the new event to the list
    eventList.appendChild(eventItem);

    // Clear form
    document.getElementById('eventForm').reset();
});