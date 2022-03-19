

function dns() {
    url = "http://edns.ip-api.com/json";   
    fetch(url).then((response) => {
        return response.json();

    // To Store the Object/JSON datadns is created.
    
    }).then((datadns) => {
        console.log(datadns);

    // If its nested I just have to use names not numbers

        document.getElementById("dnsdata").innerHTML = "DNS Info => " + datadns.dns.geo;
    })
}

dns();

function getdata() {
    url = "http://ip-api.com/json/";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        document.getElementById("id01").innerHTML = data.isp + ", " + data.city + ", ";
        document.getElementById("ipdetail").innerHTML = "IP: " + data.query;
    })
}

getdata();



// const element = document.getElementById("id01");
// element.innerHTML = "New Heading";