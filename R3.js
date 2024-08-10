



document.addEventListener('DOMContentLoaded', function() {

    function fetchAlerts() {

        let alerts = [
            "⚠️ Severe Weather Warning: Heavy rainfall expected in the next 24 hours. Stay safe! ⚠️",
            "🌪️ Tornado Watch: Conditions are favorable for tornadoes in your area. Take precautions! 🌪️",
            "🔥 Wildfire Alert: Evacuate immediately if you are in the affected area. 🔥"
        ];

       
        const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
        document.getElementById('alert-message').textContent = randomAlert;
    }

    
    fetchAlerts();
});


function viewDetails() {
    alert("Viewing more details...");
}


function downloadResource() {
    alert("Downloading resource...");
}
function contactSupport() {
    alert("Contacting support...");
}
function initMap() {
    const center = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: center,
    });
    const marker = new google.maps.Marker({
        position: center,
        map: map,
    });
}


document.getElementById('emergencyBtn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showEmergencyContacts, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showEmergencyContacts(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    
    const contacts = `
        <strong>Nearby Emergency Contacts:</strong>
        <ul>
            <li id="DOMContentLoaded">Police Station: tel:${123-456-7890}</li>
            <li>Hospital: tel:${987-654-3210}</li>
            <li>Disaster Emergency Number:tel:${911}</li>
           
        </ul>
    `;

    document.getElementById('emergencyContacts').innerHTML = contacts;
    $('#emergencyModal').modal('show');

    document.addEventListener('DOMContentLoaded', function() {
        const phoneNumber = '+9663908391'; 
        const linkText = 'Call Us Now';
        
        const phoneLink = document.createElement('a');
        phoneLink.href = `tel:${phoneNumber}`;
        phoneLink.textContent = linkText;
        
        const container = document.getElementById('phone-link-container');
        container.appendChild(phoneLink);
    });
}

  function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://ors.od.nih.gov/ser/dem/emergencyPrep/Pages/Disaster-Preparedness-Tips.aspx';
    link.download = 'https://ors.od.nih.gov/ser/dem/emergencyPrep/Pages/Disaster-Preparedness-Tips.aspx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('downloadBtnRoute').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'path/to/your/file.txt';
    link.download = 'filename.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('downloadBtnShelt').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('downloadBtnSafty').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://asdma.assam.gov.in/information-services/dos-donts-during-disaster';
    link.download = 'https://asdma.assam.gov.in/information-services/dos-donts-during-disaster';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = [
    { number: '+91100', label:'1.police station(near)' },
    { number: '+91108', label: '2. Amulance (near )' },
        { number: '+9108022971548', label: '  3.rescue department' }
    ];

    const container = 
    document.getElementById('showNumber');

    phoneNumbers.forEach(function(phone) {
        const phoneLink = document.createElement('a');
        phoneLink.href = `tel:${phone.number}`;
        phoneLink.textContent = phone.label;
        phoneLink.style.display = 'block';
        container.appendChild(phoneLink);
    });
});
const button=document.getElementById('map')
function gotlocation(position){

}
function failed(){
    console.log('ther some error')
}
button.addEventListener('click',async ()=>{
  const result= navigator.geolocation.getCurrentPosition(gotlocation,failed)
});
document.getElementById('getLoc').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://www.google.com/maps/@13.1601571,77.9146418,12.23z?authuser=0&entry=ttu';
    link.download = 'filename.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
