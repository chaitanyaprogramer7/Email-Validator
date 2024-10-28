console.log("This is my script");
let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "amitabracercar007",
    "email": "amitabracercar007@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
};

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");

    let key = "ema_live_z0laYV44mEmL4QHAnmvCxdbXBoE9iWA1hTmEMIni";
    let email = document.getElementById("username").value;

    // Construct URL with proper format
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        let result = await res.json();
        
        // Generate HTML output from the result
        let str = '';
        for (let key of Object.keys(result)) {
            str += `<div>${key}: ${result[key]}</div>`;
        }

        console.log(str);
        resultCont.innerHTML = str;  // Display results
    } catch (error) {
        console.error("Error fetching data:", error);
        resultCont.innerHTML = `<div>${error.message}</div>`;  // Display error message
    }
});
